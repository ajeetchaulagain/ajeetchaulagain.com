---
title: 'Getting started with Express.js - Keeping it simple!'
date: '2020-03-23'
tags: ['javascript', 'express', 'node']
thumbnail: ../images/thumbnails/express-js.png
author: 'Ajeet Chaulagain'
---

import { QuickInfo } from "../components/utilities/quick-info.tsx"

This tutorial is prepared to make you familiar with [Express.js](https://expressjs.com/). _Express_ is a web framework for node.js that allows you to build a _minimal and flexible_ web application. We will go through some basic concepts of Express in this tutorial and demonstrate various topics of express.js such as _routing, middleware, route chaining and more._

#### Prerequisite

I assume you have the knowledge of following topics to follow along with this tutorial.

- _ES6 Syntax and features,_ as we will be using modern ES6 syntax
- _Knowledge of Node.js and NPM (Node Package Manager)_
- _Postman:_ We will be using it to test the API endpoints

<QuickInfo> 
    Postman is a popular API end point testing application
</QuickInfo>

#### What you will learn

Upon completion of this tutorial, you will learn:

- _What is Express_ and its use case in developing web application
- _How to setup the Express_ application and create a basic route.
- Using _routing parameters in express_
- How to _chain a routing_ (\*Intermediate topic)
- Understanding and using _middleware_ in Express.

#### Source Code

- [Source code](https://www.google.com) of the final application

## What is Express.js ?

"Express is a _minimal and flexible Node.js web application framework_ that provides a robust set of features for web and mobile applications" - [Express](https://expressjs.com/)

As a full-stack javascript developer, I use Express to _make a web server and API_ in the node.js runtime environment. You can simply _install the express as a node package_ in your application. The complexity of creating a server and handling different routes by using the core http module is reduced by the express package.

For example the code for creating http server using _http_ core module looks like:

```js
var http = require('http');

//create a server object:
http
  .createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
```

In the above code, we have imported the http core module from node and created the _server that listens on port 8080._
By using express we can acheive same thing simply as:

```js
//this is es6 syntax for importing packages
import express from 'express';

const app = express();

app.listen(8080, () => {
  // on the server
  console.log(`Your Server is running on port 8080`);
});
```

There are lot of cool features offered by express.js through different methods. You will get indepth understanding of Express while you follow along this tutorial. So lets get started!

## Installing Express, Initial Setup

As _Express is node package_, first we need to install node and npm in our machine. NPM comes along with the installation of Nodejs. You can download and install NodeJS from [official site](https://nodejs.org/en/).

After you installed NodeJS and NPM in your machine, simply run the following commands to verify if its installed properly. You will get a version number in return

```bash
node -v
npm -v
```

1. _Making project directory_:

```bash
mkdir express-app && cd express-app
```

2. _Creating package.json file_:

```bash
  npm init
```

3. _Installing Express:_

```bash
npm install express
```

5. _Installing additional tools:_

```bash
  npm install nodemon
```

<QuickInfo url="https://www.npmjs.com/package/nodemon" name="nodemon">is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.</QuickInfo>

5. _Install project dev dependencies:_

Since we are going to use ES6 syntax, we need a _[babel](https://babeljs.io/)_ to transform our ES6 code into a code that browser can interpret without error. To install babel and successfully use it on our project we need to install couple of babel packages.

```bash
  npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0
```

6. _Configuring nodemon and babel:_

Now its time to configure nodemon and babel in our project. Instead of running _`npm index.js`_, we will configure nodemon in our package.json file. Lets change the "start" scripts in package.json file to this:

```json
  "scripts": {
    "start": "nodemon ./index.js --exec babel-node -e js"
  }

```

## Part 2 to be continued.

q
