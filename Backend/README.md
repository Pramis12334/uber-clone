# User Registration API

## Endpoint
`POST /users/register`

## Description
This endpoint registers a new user. It validates input, hashes the password, stores the user in the database, and returns a JWT token with user details.

---

## Request Body
Send JSON in the following format:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securePassword123"
}
