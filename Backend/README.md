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

# User Login API

## Endpoint
`POST /users/login`

## Description
This endpoint authenticates an existing user.  
It verifies the provided email and password against the database, and if valid, returns a JWT token along with the user details.  

---

## Request Body
Send JSON in the following format:

```json
{
  "email": "johndoe@example.com",
  "password": "securePassword123"
}

# User Profile API 

## Endpoint `GET /users/profile` 

## Description This endpoint retrieves the authenticated user's profile information. It requires a valid JWT token in the **Authorization** header. --- 


## Request Headers - **Authorization**: `Requires a valid JWT token in the Authorization header or cookie ` --- 

## Response 

### Success (200 OK) 
```json 
{ "_id": "64f1c2e9a1b2c3d4e5f6g7h8",
 "fullname": { 
   "firstname": "John",
   "lastname": "Doe" },
  "email": "johndoe@example.com",
  "socketId": "abc123xyz" 
}

# User Logout API

## Endpoint
`POST /users/logout`

## Description
This endpoint logs out the authenticated user.  
It requires a valid JWT token in the **Authorization** header.  
Depending on implementation, logout may involve invalidating the token on the server or simply removing it from the client side.

---

## Request Headers
- **Authorization**: `Requires a valid JWT token in the Authorization header or cookie`

---

## Response

### Success (200 OK)
```json
{
  "message": "logged out"
}
