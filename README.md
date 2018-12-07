# Wicked Fast Role Playing Game Express Api

The express Api for the WFRPG client. Allows the user save player data so they can quit and come back at a later time.

CLIENT
* [Deployed User Site]()
* [Client Repo](https://github.com/CP92/WFRPG-client)

API
* [Deployed API]()
* [API Repo](https://github.com/CP92/WFRPG-express-api)


## Technologies Used
1. Node express
2. Javascript
3. MongoDB
4. Mongoose
5. Heroku

## Planning Process
1. De-Scope from a large scaled game app to a few actions.
2. Decided the model to use.
3. Decide which data will be CRUD
4. Set up schema for DB.
5. Set up basic front end that allows the user to create, update, obtain, and delete player data. 
6. Change auto generated route methods to give back the latest save for the current user.

## Unsolved problems
1. No unsolved problems for the Api other than maybe formatting the schema correctly.

## ERD


## Routes and Methods
* POST method for route '/sign-up'
* POST method for route '/sign-in'
* PATCH method for route '/change-password'
* DELETE method for route '/sign-out'

* GET method for route '/players'
* POST method for route '/players'
* PATCH method for route '/players/:id'
* DELETE method for route '/players/:id'
