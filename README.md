# basic-auth
## Setup
* First creating the repository on github.
* Clone it on the local machine.
* npm i express dotenv cors morgan base-64 bcrypt jest nodemon mongoose supertest or @code-fellows/supergoose.
* Create the needed directories and files for the application.
## DataBase 
MongoDB
## The end points for the Application
* ( /signup ) with the POST method to save username and password in the database.
* ( /singin ) with the POST method to access the profile after validate the username and the password.

## Middleware in the Application 
* morgan.
* basicAuth to validate the password.

## Heroku Deploying Url's

[Heroku food](https://hamza-api-server.herokuapp.com/food)<br>
[Heroku cloth](https://hamza-api-server.herokuapp.com/cloth)<br>
Note : use postman to check it out and fill the body ( json format ) with the property food for the food route  { " food " : " anything " }. <br> and cloth for the cloth route.{ " cloth " : " anything " }.

## Github Test
[Github Actions](https://github.com/hamzashamoun96/api-server/actions)

## Github Pull Request
[Pull Request](https://github.com/hamzashamoun96/api-server/pull/2)

## Test
* for testing the application run the command npm test.

## UML 
![uml](/uml.png)