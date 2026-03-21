---
title: 'How to Deploy Your NestJS Application to AWS Lambda Using CDK and GitHub Actions'
description: 'This tutorial shows you how to build a beautiful and responsive image gallery using React Image Gallery'
date: '2022-11-27'
tags:
  [
    'nestjs',
    'aws-lambda',
    'aws-apigateway',
    'aws-cdk',
    'serverless',
    'github-actions',
  ]
thumbnail:
  {
    src: ../images/thumbnails/image-gallery-icon.png,
    altText: 'Image Gallery Icon',
  }
author: 'Ajeet Chaulagain'
---

Deploying a NestJS application to AWS Lambda behind API Gateway sounds straightforward — until you actually try to wire everything together. Between adapting NestJS to a serverless runtime, configuring API Gateway, and setting up infrastructure with AWS CDK, there are several moving parts that can quickly become painful.

While working on a personal side project, I ran into these challenges firsthand — especially when making NestJS compatible with Lambda’s execution model. In this guide, you’ll learn how to deploy a NestJS application to AWS Lambda using AWS CDK, with deployments fully automated via GitHub Actions.

The final source code containing the NestJS code, along with AWS CDK infrastructure can be found in this repo - [repo.url]

## What you will learn

- How to adapt NestJS for AWS Lambda
- How to configure API Gateway and AWS lambda using AWS CDK

## Prerequisite

This guide walks through a step-by-step deployment of a sample NestJS application.

To follow along, you’ll need:

- An AWS account
- Basic familiarity with Node.js and NestJS

### Setup a new NestJS project

Start by creating a new NestJS application using the Nest CLI:

```bash
npm i -g @nestjs/cli
nest new nestjs-serverless-aws-cdk
```

This scaffolds a standard NestJS project with all the necessary boilerplate.

For a deeper understanding of NestJS concepts and architecture, I highly recommend the official documentation - [NestJS](https://docs.nestjs.com/)

Now, start the above application:

```bash
cd nestjs-serverless-aws-cdk
npm run start
```

You should see the application running at http://localhost:3000/.
The default port is configured in src/main.ts

```ts:title=src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

The scaffolded application already has a sample controller (app.controller.ts), service (app.service.ts) and module (app.module.ts). Since the focus of this tutorial is mostly about deployment of NestJS as a serverless, we will not be adding separate endpoint. Rather utilize the same sample endpoint.

The scaffolded application includes a sample controller (`app.controller.ts`), service (`app.service.ts`), and module (`app.module.ts`).

Since the focus of this guide is on deploying NestJS to AWS Lambda, we’ll reuse the existing sample endpoint instead of creating new ones for our testing purpose.

## Adapting NestJS for Lambda [ORG]

By default, NestJS application is designed to run in a a long-lived HTTP server, where the application bootstraps is done once, initializes the dependencies, and continues handling incoming requests.
However, since AWS Lambda being a serverless compute service that does not require HTTP server and run in different execution model.
Here are some of the key considreation for Lambda execution model:

- You organize your code in Lambda function, which are invoked per request
- execution environments are generally stateless and short-lived
- Application may be re-bootstraped and initialized during cold starts.

Due to this reason of NestJS fefault designg to operate and how lambda executes a code, we need to adapt NestJS to work within the Lambda’s event-driven execution model.

that listens on a certain port, and it isbuild around the concept of long-running application server, where the application initiazation is done once and request handling is continued after that. But we know AWS lambda follows even-drivent model, where functions are invoked per request and execution environment can be short-lived.

## Adapting NestJS for AWS Lambda

By default, a NestJS application runs on a long-lived HTTP server. It bootstraps once, initializes its dependencies, and continues handling incoming requests.

AWS Lambda, on the other hand, follows an event-driven model. It does not rely on a persistent server and instead executes code per request, with stateless and short-lived environments that may be re-initialized during cold starts.

Because of this difference, NestJS cannot run directly in Lambda without some adaptation.

To make this work, we bootstrap the NestJS application in a way that fits Lambda’s execution model. For this, we use `@codegenie/serverless-express`, which allows a NestJS application to run inside AWS Lambda.

Behind the scenes, it converts the Lambda event into an HTTP request that NestJS can handle, and then transforms the response back into a format Lambda expects.

In simple terms, it makes Lambda behave like an HTTP server so that NestJS can run without major changes.

Now, we understand the need of a additional configuration, lets setup a lambda hander using the pacakge.
First, install the `@codegenie/serverless-express` package:

```bash
npm install @codegenie/serverless-express
```

And then create a new file called lambda.ts inside src/ side by side to main.ts file that contains NestJS original bootstrapping logic.

```ts:title=src/lambda.ts {20-38}{numberLines:false}
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverlessExpress from '@codegenie/serverless-express';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';
import express from 'express';

import { AppModule } from './app.module';

type AsyncHandler = (
event: APIGatewayProxyEvent,
  context: Context
) => Promise<APIGatewayProxyResult>;

let serverlessExpressInstance: AsyncHandler | undefined;

async function setup(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  const expressApp = express();
  const nestApp = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp)
  );

  nestApp.enableCors();
  await nestApp.init();

  serverlessExpressInstance = serverlessExpress({
    app: expressApp,
  }) as unknown as AsyncHandler;

  return serverlessExpressInstance(event, context);
}

export function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  if (serverlessExpressInstance) {
    return serverlessExpressInstance(event, context);
  }

  return setup(event, context);
}
```

Setting up infrastructure using AWS CDK

Now that we have the Lambda handler ready to serve our NestJS application, let’s set up the infrastructure using AWS CDK. AWS Cloud Development Kit (CDK) is an Infrastructure as Code (IaC) framework that allows you to define AWS resources using programming languages such as TypeScript, Python, Java, and more. Think of it like this: Instead of writing raw CloudFormation templates, you write code that is synthesized into CloudFormation, which is then used to deploy resources to AWS.

The High Level CDK flow should look something like this:

```tsx
👨‍💻 Write CDK Code
        ↓
🧪 cdk synth
        ↓
📄 CloudFormation Template
        ↓
🚀 cdk deploy
        ↓
☁️ AWS Resources
```

From my experience, CDK makes defining infrastructure more predictable and easier to manage compared to raw templates.

### CDK mental model (quick overview)

Before we define our infrastructure, it helps to understand a few core CDK concepts:

- **App** → The root container for your CDK application
- **Stack** → A unit of deployment (maps to a CloudFormation stack)
- **Construct** → Building blocks used to define AWS resources

In this guide, we’ll define a single stack that provisions our Lambda function, API Gateway and related resources.

## Setting Up the CDK Project

I chose [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html) to define the infrastructure because it lets you write your cloud resources in TypeScript alongside the rest of the project. CDK synthesises your code into a CloudFormation template and handles the deployment.

To keep infrastructure code separate from application code, initialise the CDK project in an `infra/` subdirectory:

```bash
$ mkdir infra && cd infra
$ cdk init app --language typescript
```

Once the project is created, install the CDK construct libraries:

```bash
$ npm install aws-cdk-lib constructs
```

You can refer to the [AWS CDK TypeScript documentation](https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html) for a detailed walkthrough of the project structure and how constructs, stacks, and apps relate to each other.

## Defining the CDK Stack

Now you will define the actual infrastructure: a Lambda function, an HTTP API, and an output with your endpoint URL.

Replace the generated stack file in `infra/lib/` with the following:

infra/lib/app-stack.ts

```typescript
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations';

export class AppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const nestFunction = new NodejsFunction(this, 'NestJsFunction', {
      entry: '../src/lambda.ts',
      handler: 'handler',
      runtime: lambda.Runtime.NODEJS_20_X,
      memorySize: 512,
      timeout: cdk.Duration.seconds(30),
      bundling: {
        minify: true,
        sourceMap: false,
        externalModules: ['@aws-sdk/*'],
      },
      environment: {
        NODE_ENV: 'production',
      },
    });

    const httpApi = new apigatewayv2.HttpApi(this, 'NestJsHttpApi', {
      defaultIntegration: new HttpLambdaIntegration(
        'NestJsIntegration',
        nestFunction
      ),
    });

    new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: httpApi.apiEndpoint,
      description: 'HTTP API endpoint URL',
    });
  }
}
```

`NodejsFunction` uses esbuild under the hood to bundle and transpile your TypeScript into a single Lambda-ready file — no separate build step required.

A few things worth noting about the configuration:

- **`memorySize: 512`** — Lambda allocates CPU proportional to memory. NestJS bootstrap is CPU-bound, so higher memory means faster cold starts. 512 MB is a good starting point.
- **`timeout: 30`** — The Lambda default is 3 seconds, which is too short for a NestJS cold start. 30 seconds gives enough headroom.
- **`externalModules: ['@aws-sdk/*']`** — The AWS SDK is already included in the Lambda Node.js 20 runtime. Marking it as external keeps your bundle lean and avoids version conflicts.

> **Note:** The `entry` path in `NodejsFunction` is relative to the `infra/` directory. If your source is at `src/lambda.ts` in the repo root and CDK lives in `infra/`, the correct path is `'../src/lambda.ts'`.

## Deploying the Stack for the First Time

Before deploying, you need to bootstrap CDK in your AWS account once. This provisions an S3 bucket and IAM roles that CDK uses to manage deployments:

```bash
$ cd infra
$ cdk bootstrap aws://<your-account-id>/<your-region>
```

Once bootstrapping is complete, deploy the stack:

```bash
$ cdk deploy
```

CDK will show a summary of the changes and prompt for confirmation. After deployment, you will see the API endpoint printed in the output:

```
✅  AppStack

Outputs:
AppStack.ApiEndpoint = https://abc123xyz.execute-api.us-east-1.amazonaws.com
```

Visit the endpoint and confirm your NestJS application responds before moving on.

## Automating Deploys with GitHub Actions

Now let's automate the deployment so every push to `main` triggers a deploy. Create the following workflow file in your repository:

.github/workflows/deploy.yml

```yaml
name: Deploy

on:
push:
branches: - main

jobs:
deploy:
name: Deploy to AWS
runs-on: ubuntu-latest

    steps:
      - name: Checkout source
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install app dependencies
        run: npm ci

      - name: Install CDK dependencies
        run: npm ci
        working-directory: infra

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Deploy CDK stack
        run: npx cdk deploy --require-approval never
        working-directory: infra
```

Once the file is in place, add your AWS credentials as repository secrets under **Settings → Secrets and variables → Actions**:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

Push to `main` and the Actions tab will show the workflow running. From this point, every merge to `main` deploys automatically.

> For production workloads, I recommend switching to [OIDC-based AWS authentication](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services) instead of long-lived access keys. It removes a stored secret from your repository and is worth the extra setup time.

## Things I Ran Into

A few issues that added time to this setup the first time around:

**`.env` files are not available in Lambda.** Any environment variable your app reads at runtime needs to be passed through `NodejsFunction.environment` in your stack. For sensitive values like database URLs, I use [AWS SSM Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html) and fetch them during `bootstrap()`.

**Decorator metadata flags must be enabled.** NestJS requires `"emitDecoratorMetadata": true` and `"experimentalDecorators": true` in your root `tsconfig.json`. `NodejsFunction` reads your tsconfig automatically — if those flags are missing, dependency injection breaks silently at runtime.

## Conclusion

In this tutorial, you learned how to adapt a NestJS application for AWS Lambda using the cached handler pattern, define the infrastructure with CDK, and automate deployments through GitHub Actions. I hope this guide saves you the trial and error I went through and gives you a solid foundation to build on.

For further reading, I suggest checking out [CDK Pipelines](https://docs.aws.amazon.com/cdk/v2/guide/cdk_pipeline.html) if you need multi-stage deployments with staging and production environments, and [Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/chapter-layers.html) if you end up deploying multiple functions that share common dependencies.
