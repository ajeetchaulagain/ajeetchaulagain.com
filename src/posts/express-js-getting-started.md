---
title: "Getting started with Express.js - Keeping it simple!"
date: "2020-03-23"
tags: ["javascript", "express", "node"]
thumbnail: ../images/thumbnails/express-js.png
author: "Ajeet Chaulagain"
---

This tutorial is prepared to make you familiar with [Express.js](https://expressjs.com/). _Express_ is a web framework for node.js that allows you to build a _minimal and flexible_ web application. We will go through some basic concepts of Express in this tutorial and demonstrate various topics of express.js such as _routing, middleware, route chaining and more._

#### Prerequisite

I assume you have the knowledge of following topics to follow along with this tutorial.

- _ES6 Syntax and features,_ as we will be using modern ES6 syntax
- _Knowledge of Node.js and NPM (Node Package Manager)_
- _Postman:_ We will be using it to test the API endpoints

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

```jsx:title=src/index.js {numberLines: true}
const ContactPage = () => {
  return (
    <MasterLayout>
      <IntroSection />
      <ContentLayout>
        <h1>Contact Me</h1>
        <p>
          Say a friendly hello to me either throug social media or the contact
          form available below.
        </p>
        <p>Contact me, if you have got project in mind</p>

        <ContactForm />
      </ContentLayout>
    </MasterLayout>
  )
}
```

```javascript{numberLines: true}
import express from "express"
import data from "./data/data.json"

const app = express()

const PORT = 3000

// This is for the public folder on path /
app.use(express.static("public"))
```

You will get indepth understanding of Express while you follow along this tutorial. So lets get started!

## Installing Express and Initial Setup

As _Express is node package_, first we need to install node and npm in our machine. NPM comes along with the installation of Nodejs. You can download and install NodeJS from [official site](https://nodejs.org/en/).

After you installed NodeJS and NPM in your machine, simply run the following commands to verify its installed properly.

```bash
node -v
npm -v
```

After that

_Installing Express_: To install the express you simply need to execute the following commmand in your CLI (Command Line Interface)

```bash
npm install express
```

## Table Sample

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

## Conclusion

Object Basics Guide - [Find here the object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
