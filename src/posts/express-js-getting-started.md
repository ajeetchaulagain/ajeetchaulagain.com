---
title: "Getting started with Express.js - Keeping it simple!"
date: "2020-03-23"
tags: ["javascript", "express", "node"]
thumbnail: ../images/thumbnails/express-js.png
author: "Ajeet Chaulagain"
---
This tutorial is prepared to make you familiar with [Express.js](https://expressjs.com/). *Express* is a web framework for node.js that allows you to build a *minimal and flexible* web application. We will go through some basic concepts of Express in this tutorial and demonstrate various topics of express.js such as *routing, middleware, route chaining and more.*

#### Prerequisite

I assume you have the knowledge of following topics to follow along with this tutorial.

- *ES6 Syntax and features,* as we will be using modern ES6 syntax
- *Knowledge of Node.js and NPM (Node Package Manager)*
- *Postman:* We will be using it to test the API endpoints


#### What you will learn

Upon completion of this tutorial, you will learn:

- *What is Express* and its use case in developing web application
- *How to setup the Express* application and create a basic route.
- Using *routing parameters in express*
- How to *chain a routing* (*Intermediate topic)
- Understanding and using *middleware* in Express.


#### Source Code

- [Source code](https://www.google.com) of the final application


## What is Express.js ?

"Express is a *minimal and flexible Node.js web application framework* that provides a robust set of features for web and mobile applications" - [Express](https://expressjs.com/)

As a full-stack javascript developer, I use Express to *make a web server and API* in the node.js runtime environment. You can simply *install the express as a node package* in your application. The complexity of creating a server and handling different routes by using the core http module is reduced by the express package. 

```jsx
const ContactPage = () => {
  return (
    <MasterLayout>
      <IntroSection/>
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

```Javascript
import express from 'express';
import data from './data/data.json';

const app = express();

const PORT = 3000;

// This is for the public folder on path /
app.use(express.static('public'));

// method to use JSON
// app.use(express.json());

app.use(express.urlencoded({extended: true}));


//This is for the images folder on path /images
app.use('/images', express.static('images'));

app.get('/', (req,res)=>{
    // get data from the server
    res.json(data);
});

// JSON data
// { "hello": "JSON is cool"}
// URLEncoded data
// hello=URLEcncoded+is+cool

app.post('/newItem', (req,res)=>{
    console.log(req.body);
    res.send(req.body);
});


app.get('/item/:id',(req,res,next)=>{
    // this is the middleware that pulls the data
    let user = Number(req.params.id);
    console.log(data[user]);

    // middleware that uses the req object
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);

    // everything above is middleware before sending response back
    res.send(data[user]);
    next();
},(req,res)=>{
    console.log('Did you get the right data?');
});


// Chaining the route
app.route('/item')
    .get((req,res) => {
        // res.send(`a get request with /item rout on port ${PORT}`);
        throw new Error();
    }
    )
    .put((req,res)=>{
        res.send(`a put request with /item route  on port ${PORT}`);
    })
    .delete((req,res) => {
        res.send(`a delete request with /item route  on port ${PORT}`);
    });

// end of chaining code

// What is middleware?
// middleware are the function that has access to req and res object in express application.



// app.put('/item', (req,res)=>{
//     res.send(`a put request with /item route  on port ${PORT}`);
// });

// app.get('/item', (req,res)=>{
//     // res.download('./images/rocket.jpg'); // Similar to the sendFile method
//     // res.send(`a put request with /item route  on port ${PORT}`);
//     // res.redirect('https://www.linkedin.com');

//     res.send(`a get request with /item rout on port ${PORT}`);
// });

// app.delete('/item', (req,res)=>{
//     res.send(`a delete request with /item route  on port ${PORT}`);
// });


// Error handling functions goes at last just before listen function
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send(`Red alert! Red Alert!: ${err.stack}`);
});

app.listen(PORT, ()=>{
    // on the server
    console.log(`Your Server is running on port ${PORT}`);
});


```

You will get indepth understanding of Express while you follow along this tutorial. So lets get started!

## Installing Express and Initial Setup

As *Express is node package*, first we need to install node and npm in our machine. NPM comes along with the installation of Nodejs. You can download and install NodeJS from [official site](https://nodejs.org/en/).

After you installed NodeJS and NPM in your machine, simply run the following commands to verify its installed properly.

``` node -v ```
``` npm -v ```

*Installing Express*: To install the express you simply need to execute the following commmand in your CLI (Command Line Interface)

``` npm install express ```

## Table Sample

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


## Conclusion

Object Basics Guide - [Find here the object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
