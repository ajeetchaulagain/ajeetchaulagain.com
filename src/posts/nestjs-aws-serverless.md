---
title: 'How to Deploy Your NestJS Application to AWS Lambda Using CDK and GitHub Actions'
description: 'This tutorial shows you how to build a beautiful and responsive image gallery using React Image Gallery'
date: '2026-03-29'
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

The final source code containing the NestJS code, along with AWS CDK infrastructure can be found in this repo - [nestjs-serverless-aws-lambda-cdk
Public
](https://github.com/ajeetchaulagain/nestjs-serverless-aws-lambda-cdk)

## What you will learn

- How to adapt a NestJS application to run in AWS Lambda using `@codegenie/serverless-express`
- How to define AWS infrastructure (Lambda function, API Gateway) using AWS CDK
- How to automate deployments with GitHub Actions
- Best practices for optimizing NestJS performance in a serverless environment

## Prerequisite

This guide walks through a step-by-step deployment of a sample NestJS application.

To follow along, you’ll need:

- An AWS account
- Basic familiarity with Node.js and NestJS

## Setup a new NestJS project

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

```ts:title=src/main.ts {6}{numberLines:true}
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

The scaffolded application already has a sample controller (app.controller.ts), service (app.service.ts) and module (app.module.ts). Since the focus of this tutorial is mostly about deployment of NestJS as a serverless, we will not be adding separate endpoint. Rather utilize the same sample endpoint.

## Adapting NestJS for AWS Lambda

By default, a NestJS application runs on a long-lived HTTP server. It bootstraps once, initializes its dependencies, and continues handling incoming requests.

AWS Lambda, on the other hand, follows an event-driven model. It does not rely on a persistent server and instead executes code per request, with stateless and short-lived environments that may be re-initialized during cold starts.

Because of this difference, NestJS cannot run directly in Lambda without some adaptation. To make this work, we bootstrap the NestJS application in a way that fits Lambda’s execution model. For this, we use `@codegenie/serverless-express`, which allows a NestJS application to run inside AWS Lambda.

Behind the scenes, it converts the Lambda event into an HTTP request that NestJS can handle, and then transforms the response back into a format Lambda expects.In simple terms, it makes Lambda behave like an HTTP server so that NestJS can run without major changes.

Now, we understand the need of a additional configuration, lets setup a lambda hander using the pacakge. First, install the `@codegenie/serverless-express` package:

```bash
npm install @codegenie/serverless-express
```

And then create a new file called lambda.ts inside src/ side by side to main.ts file that contains NestJS original bootstrapping logic.

```ts:title=src/lambda.ts {20-38}{numberLines:true}
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

## Setting up infrastructure using AWS CDK

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

### Initialising CDK in the project

Now, you have understood the basics of AWS CDK, lets initialise it in our project. To keep the infrastructure code separate from the nest js source code, you will be going to initilaize the CDK Project into separate subdirectory `infra/`. You will run the following command from the project directory:

```tsx
mkdir infra && cd infra
npx cdk init app --language typescript
```

After running the command, you’ll notice a few new files generated my above initialization code:

.
├── bin/
├── lib/
├── cdk.json
├── package.json
└── tsconfig.json

Where,

- bin contains entry point of your CDK app
- lib/ contains the the stack definition for your infrastructure
- cdk.json contains configuration for CDK CLI

Once the project is created, install the CDK construct libraries:

```bash
$ npm install aws-cdk-lib constructs
```

You can refer to the [AWS CDK TypeScript documentation](https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html) for a detailed walkthrough of the project structure and how constructs, stacks, and apps relate to each other.

### Configuring AWS Credentials (Step by Step)

Before running any AWS CDK commands, you need to configure AWS credentials on your local machine.

This allows AWS to authenticate your requests and perform actions on your behalf — such as deploying CloudFormation stacks and uploading assets.

For example, when you run:

```
npx cdk bootstrap
```

your IAM identity needs permissions to create foundational resources like:

- CloudFormation stacks
- S3 buckets (for storing assets)
- IAM roles and policies

<InfoCallToAction htmlString="<p>In production environments, it’s best to follow the principle of least privilege, granting only the permissions required for a specific task.</p> However, to keep this guide simple and focused, we’ll use an IAM user with the AdministratorAccess policy attached."/>

Follow these steps to configure AWS credentials:

1. Install AWS CLI
   - Make sure AWS CLI is installed on your machine. Follow the official installation guide here - https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

2. Create a IAM User with Administrator Access and generate a access key:
   1. Log in to your AWS console
   2. Navigate to IAM -> Users -> Create User and create user and access key.
   3. Create a user (e.g., `cdk-bootstrap-admin`)
   - Attach the **AdministratorAccess** policy
   - Generate an **access key**

   [Video showing creating user and creating access key will be attached here]
   Make sure to download the secret key to be used later— you won’t be able to view it again.

3. Run aws configure to setup up credentials for the AWS CLI so it can authenticate your requests.

   ```bash
   aws configure
   ```

   You’ll be prompted to enter:

   ```bash
   AWS Access Key ID:
   AWS Secret Access Key:
   Default region name: us-east-1
   Default output format: json
   ```

   Paste the access keys you generated in the previous step.

4. Verify Credentials configuration
   - To confirm aws credentials are configured correctly, run a following aws cli command, that will show the details of your AWS account and IAM user

   ```bash
   aws sts get-caller-identity
   ```

   ```bash:title='Output of aws sts get-caller-identity'
   {
   "UserId": "UserId",
   "Account": "AccouontNumber",
   "Arn": "arn:aws:iam::<AccountNumber>:user/cdk-bootstrap-admin"
   }

   ```

### Bootstrapping the CDK project

Now that your AWS credentials are configured locally, you’re ready to bootstrap your AWS environment for CDK.

Bootstrapping prepares your AWS account so that AWS CDK can deploy resources on your behalf.

Run the following command in your infra/ directory:

```bash
npx cdk bootstrap
```

This command basically creates a foundational one time Cloudfromation stack (called CDKToolkit) in your AWS which sets up required resources such as IAM roles, s3 bucket to upload cloudformation templateds. These resources are needed for future cdk deployments. Note: npx cdk bootstrap is one time process.

### Writing CDK Stack

Now after successful cdk bootstrap, lets write a CDK stack that defines the lambda function. If you navigate to infra/lib directory you will see the infra-stack.ts file created during initialization. Feel free to update your stack name as required, but for the purpose of this guide, I am going to leave stack name as InfraStack.

In your infra-stack.ts file, add the following code:

```ts:title=infra/lib/infra-stack.ts {10-29} {numberLines:true}
import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const nestApiLambda = new lambda.Function(this, 'NestApiLambdaFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'dist/lambda.handler', // compiled output of src/lambda.ts
      code: lambda.Code.fromAsset(path.join(__dirname, '../..'), {
        exclude: [
          'node_modules/aws-cdk',
          'node_modules/aws-cdk-lib',
          'node_modules/.bin',
          'infra',
          'test',
          '.git',
        ],
      }),
      memorySize: 512,
    });

    new cdk.CfnOutput(this, 'NestApiLambdaFunctionName', {
      value: nestApiLambda.functionName,
    });
  }
}
```
