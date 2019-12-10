# Festival-of-Elves
25 day Festival of the Elves to make your holiday just a little bit better .
---- 

 ## Table of contents
* [What is Festival of the Elves App?](#what-is-FOTEA)
* [Technologies](#technologies)
* [Files Included](#files-included)
* [Functionality](#functionality)
* [Upcomming Changes](#upcomming-changes)
* [Contributors](#contributors)

----

## What is Festival of the Elves? 

Purpose of the app: Is to make it easy for parents to create Christmas magic for their kids. 

The experience is can be solely online and or combined online and offline experience for parents and kids. 

Post creating a profile parent are assigned two elves that provide them 25 days worth of activities to do with their kids over the holiday season. The elves’ notes can be delivered to the kids each morning via the Kid view on the app or printed out for the parents to hide in an Advent calendar box or in any box.
MVP will not allow for customization of the experience;  
For example if the parents want only to  create magic for seven days vs 25 days or swap out an activity card  or create an activity card from scratch. That level of personalization would be in future versions.


The app will leverages sequelize database, node/ command Line Interface(CLI) for the development team, handelbars for the parent and kid experience, google calendar api and authentication 

----

## Link to screenshots
![image](https://github.com/AElliott10/Bamazon/blob/master/2019-11-18.png)

----

## Technologies

* Serverside - Nodejs
[npm](https://www.npmjs.com/)

    - npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.

    *[npm i express] Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

    *[npm i cli-table]?
    -This utility allows you to render unicode-aided tables on the command line from your node.js scripts.

    *[npm i inquirer]?
    Inquirer.js strives to be an easily embeddable and beautiful command line interface for Node.js (and perhaps the "CLI Xanadu").

    
* Database 
[Sequelize](https://sequelize.org/master/manual/getting-started.html)
    *[npm i sequelize]
    *[npm i mysql2] 

    - MySQL is an open-source relational database management system. 
    - Sequelize is a promise-based ORM for Node. js. Sequelize is a powerful library in Javascript that makes it easy to manage a SQL database.

* HTML/CSS
[Handlebars](https://handlebarsjs.com/)
    *[npm i express-handlebars]
    - Written in JavaScript, Handlebars.js is a compiler that takes any HTML and Handlebars expression and compiles them to a JavaScript function. With Handlebars, you can separate the generation of HTML from the rest of your JavaScript and write cleaner code.

[Bootstrap](https://getbootstrap.com/) 


----

## Files 
* root
    - README.MD
* server.js
* Config
    - config.json
* Model
    - example.js
    - index.js
    - schema.sql
* node_modules
* public
    - js
        * index.js
    - styles
        * styles.css
* routes
    - apiRoutes.js
    - htmlRoutes.js
    - test
        * canary.test.js
* views
    - layouts
        * main.handlebars
    - 404.handlebars
    - example.handlebars
    - index.handlebars
* eslintignore
* eslintrc.json
* .gitignore
* .travis.yml
* package-lock.json

----

## Functionality
* Open the Unsolved folder and run `npm install` from your terminal to install dependencies.
    

Parent Experience
* Landing HTML Page: 
    * Asks if they have an account or would like to create an account

* Create account: 
    * New page opens and asks 
    Create User Name:
    Create Password:

    First Parent First Name:
    First Parent Last Name:
    Second Parent First Name:
    Second Parent Last Name

    First Child First Name:
    Second Child First Name:
    Third Child First Name:

    First Child Age:
    Second Child Age:
    Third Child Age:




    
