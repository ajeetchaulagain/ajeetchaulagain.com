---
title: "Getting started with Express.js - Keeping it simple!"
date: "2020-03-23"
tags: ["javascript", "express", "node"]
thumbnail: ../images/thumbnails/express-js.png
author: "Ajeet Chaulagain"
---

import { QuickInfo }  from "../components/utilities/quick-info.js"

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

For example the code for creating http server using *http* core module looks like:

```js
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```

In the above code, we have imported the http core module from node and created the server that listens on port 8080.

By using express we can acheive same thing simply as:

```js
//this is es6 syntax for importing packages
import express from 'express';

const app = express();

app.listen(8080, ()=>{
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

1. *Make project directory*: Run the following command to make a empty project directory and cd into that directory
```bash
mkdir express-app && cd express-app
```

2. Create package.json file*: 
```bash
  npm init
```

3. Install Express: 
```bash
npm install express
```

Then you will see express as a project dependency in your package.json file.

```json:title=package.json
  {
   . . . . . . . . 
   . . . . . . . . 

  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.2"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-0": "^6.24.1"
  }
}
```

5. *Installing additional tools:* 

To make our server automatically refresh when file is changed, lets install *nodemon* package.
```bash
  npm install nodemon
```
_ 5. Install project dev dependencies: _

Since we are going to use ES6 syntax, we need a babel plugin to transform our ES6 code into a code that browser can interpret without error. To install babel run the following command in your terminal.
```bash
  npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0
```
<QuickInfo>Babek is a popular tool created by australian developer who currently works in facebook</QuickInfo>

## Table Sample

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

## Conclusion

Object Basics Guide - [Find here the object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
