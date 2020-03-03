---
title: "Telstra Cloud Decision Support System"
technologies:
  [
    "React",
    "Next.js",
    "Node.js",
    "Firebase",
    "Express.js",
    "Ant Design",
    "Heroku",
  ]
---

## Overview of Project

Cloud Decision Support Tools was developed in order to assist various business to choose a correct cloud-based platform based on their needs. This project was done

## Architecture of the Project

The architecture of the application is very simple. CDT works in mainly three tier architecture. The final solution is planned to be hosted in the cloud like Heroku, Google Cloud, etc.

The three layers of application architecture are as follows:

1. Client Layer:

The Client layer of the application follows an MVC structure that works with the APIs over a secure http. Using the JWT tokens, client authentication is made more secure. The entirety of the application is operated via dynamic HTML pageviews rendered on JavaScript. This allows for a smooth user experience that is supported by ReactJS framework as it is an optimal choice for fetching rapidly changing data. Likewise, for the storage solutions, a SaaS platform known as Firebase is used and deployed in the Google Cloud Platform. This platform manages the availability of the application depending on what is needed and provides instant access to the data in need. Thus, the combination of all the components in the Client layer ensures greater speed and performance for the application and its usage.

2. Business Layer

The application has the centre activity of sequencing the further inquiries on the past DUCM question input. It is confidential as this layer has the server in it which has all the data. All the business logic will be in this layer. For each operation that will be used in the application, REST API will also be developed.

3. Database Layer:
   In this application we are using firebase which is a google supported platform for storing data and provides database, authentication and cloud storage as services. For the database NoSQL is used called Fire store which supports the dynamic structuring of the data. For managing various kinds of interaction with the data in the cloud hosted database, we are using cloud functions which is a feature in this database like triggers in the SQL database.

## My Roles in a project

My roles in a project was to implement the Case Based Reasoning algorithms given by Telstra.
