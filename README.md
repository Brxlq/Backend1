# Express API Assignment

## Project Description

This project is a simple backend application built using Node.js and Express. It demonstrates how to create a RESTful API with basic CRUD operations (GET, POST, PUT, DELETE) and store data persistently in a local JSON file. All API endpoints are tested using Postman. The chosen object type for this project is Tasks, where each task contains an id and a name.

## How to Install Dependencies

1. Open a terminal in the project folder
2. Run the following command:
   npm install

## How to Run the Server

Start the server by running:
node server.js

The server will run at:
[http://localhost:3000](http://localhost:3000)

## List of API Routes

### Demo Routes

* GET /
* GET /hello
* GET /time
* GET /status

### CRUD Routes (Tasks)

* GET /tasks
* POST /tasks
* PUT /tasks/:id
* DELETE /tasks/:id

## Example Postman Requests

### Create a Task

Method: POST
URL: [http://localhost:3000/tasks](http://localhost:3000/tasks)
Body (JSON):

```json
{
  "name": "Buy milk"
}
```

### Get All Tasks

Method: GET
URL: [http://localhost:3000/tasks](http://localhost:3000/tasks)

### Update a Task

Method: PUT
URL: [http://localhost:3000/tasks/1](http://localhost:3000/tasks/1)
Body (JSON):

```json
{
  "name": "Buy bread"
}
```

### Delete a Task

Method: DELETE
URL: [http://localhost:3000/tasks/1](http://localhost:3000/tasks/1)

## Tools Used

* Node.js
* Express
* Postman
