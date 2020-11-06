# Project: api-server

An Express/Node.js based server designed to be a “model agnostic” REST API server, which can perform CRUD operations on any data model

## Author: Lulu Sevignon

## Users stories
- As a developer, I want to CREATE a new record in a database, using the POST method on a custom API
- As a developer, I want the API to return the record I create in JSON format
- As a developer, I want to GET list of all records in a database, using the GET method on a custom API
- As a developer, I want the API to return an object containing count, and a results[] array
- As a developer, I want to GET an existing in a database, using the GET method with an ID parameter on a custom API
- As a developer, I want the API to return an object containing the record from the database
- As a developer, I want to UPDATE an existing record in a database, using the PUT and PATCH methods with an ID parameter on a custom API
- As a developer, I want the API to return the record I updated in JSON format
- As a developer, I want to DELETE an existing record in a database, using the DELETE method with an ID parameter on a custom API
- As a developer, I want the API to return the record I updated in JSON format
- As a developer, I want Swagger documentation for this API so that I can make it easier for other developers to use and understand

## Links and Resources

[Dynamic API Server - Business Requirements](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/api-server/)
 
## Setup



#### Support all REST/HTTP methods
- GET: Retrieve record(s) from a data source
    - All
    - One (by id)
    - Some (by filtering)
- POST: Create a new record in a data source
- PUT: Update a single full record in a data source
- PATCH: Update part of a single record in a data source
- DELETE: Delete a record in a data source

#### Obey a standard routing structure

i.e. http://localhost:3000/api/v1/products/12345

- `/api/v#` where # is the version number of our API
  - `/model` where ‘model’ is the name of the data model to operate on
    - `/id` where ‘id’ is the id number of a specific entity in the data model



- Allow for Query String parameters for filtering
  - i.e. http://localhost:3000/api/v1/products?category=electronics
  - This would GET every entry in our products data model where the category is ‘electronics’