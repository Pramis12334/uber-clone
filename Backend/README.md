# User API Documentation

---

## User Registration API

### Endpoint
`POST /users/register`

### Description
Registers a new user. Validates input, hashes the password, stores the user in the database, and returns a JWT token with user details.

### Request Body
{
 
 - `fullname`: {
   - `firstname`: `John`,
   - `lastname`: `Doe`
  },
 - `email`: `johndoe@example.com`,
 - `password`: `securePassword123`
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

{
   - `email`: `johndoe@example.com`,
 - `password`: `securePassword123`
}

# User Profile API

## Endpoint
`GET /users/profile`

## Description
This endpoint retrieves the authenticated user's profile information.  
It requires a valid JWT token in the **Authorization** header.

---

## Request Headers
- **Authorization**: `Bearer <jwt_token>`

### Field Requirements
- A valid JWT token must be provided in the request header.  
- Without the token, the request will be rejected.

---

## Response

### Success (200 OK)
{
 - `_id`: `64f1c2e9a1b2c3d4e5f6g7h8`,
 - `fullname`: {
   - `firstname`: `John`,
   - `lastname`: `Doe`
  },
 - `email`: `johndoe@example.com`,
 - `password`: `securePassword123`
}

# User Logout API

## Endpoint
`POST /users/logout`

## Description
This endpoint logs out the authenticated user.  
It requires a valid JWT token in the **Authorization** header.  
Depending on implementation, logout may invalidate the token on the server or simply remove it client-side.

---

## Request Headers
- **Authorization**: `Bearer <jwt_token>`

### Field Requirements
- A valid JWT token must be provided in the request header.  
- Without the token, the request will be rejected.

---

## Response

### Success (200 OK)
{
 - `message`: `Successfully logged out`
}
