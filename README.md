# GraphQL Project

This repository holds the codebase for a GrahpQL project needed to complete a work goal, it is a simple app that shows recipes and their details like

- Name
- Ingredients
- Introduction
- Pics

It is powered up by GraphQL and the Apollo Server, it's composed of the following tecnologies:

- NodeJS
- Express Js
- GraphQL
- Apollo Server
- PugJs - Templating Engine

It also uses a JS file as the main source of information (DB).

## Brief description and introduction

The app follows the following folder structure:

- api: Where all of the graphql and routing files are located
- db: Where the JS file containing the information is
- public: Where the styles and images are located
- utils: Folder for utility functions and scripts
- views: Where all of the HTMl views are located
- Root Level: Where the main file is located as well as the configuration files too.

It uses a basic structure, usign GraphQL requirements as ways to organize the code like the resolvers acting almost as a controller on a MVC app, and also the queries as a limited set of options to query the apollo server, and the router file acting as a bridge between the GraphQL queries, resolvers and the DB file. Then it uses the views to render all the information and finally all of the assets like the css code and images come from the public folder. The app has its starting point from the root level app.js and its constant information on constants.js.

## How to use

- Clone the repo into your computer
- Type `npm ci` into the root folder
- Then run `npm start` to start the app
- Go to `http://localhost:3000` to see the app in your browser

## Final considerations

There is a script that you can use to start developing, you can run `npm run dev` for that, feel free to clone, fork or do any other permitted action with this repo as its purpose its to serve as a demonstration playground on how to work with templating engines, graphQL and expressJS in a simple way.

## Pics

<img src="https://raw.githubusercontent.com/N-bred/graphQlProject/main/App1.png?sanitize=true&raw=true" />
<img src="https://raw.githubusercontent.com/N-bred/graphQlProject/main/App2.png?sanitize=true&raw=true" />