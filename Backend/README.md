# User API Documentation

---

## User Registration API

### Endpoint
`POST /users/register`

### Description
Registers a new user. Validates input, hashes the password, stores the user in the database, and returns a JWT token with user details.

### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securePassword123"
}
# User Login API

## Endpoint
`POST /users/login`

## Description
This endpoint authenticates an existing user.  
It verifies the provided email and password against the database.  
If the credentials are valid, it returns a JWT token along with the user details.

---

## Request Body
Send JSON in the following format:

```json
{
  "email": "johndoe@example.com",
  "password": "securePassword123"
}
