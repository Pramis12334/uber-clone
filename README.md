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
 - `password`: `securePassword123`,

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
 - `password`: `securePassword123`,
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
 - `message`: `Successfully logged out`,
}

# Captain Registration API

## Endpoint
`POST /captains/register`

## Description
This endpoint registers a new **Captain** (driver).  
It validates input fields, hashes the password, stores the captain in the database along with vehicle details, and returns a JWT token with captain information.

---

## Request Body
Send JSON in the following format:

{
 - `fullname`: {
   - `firstname`: `John`,
   - `lastname`: `Doe`
  },
 - `email`: `johndoe@example.com`,
 - `password`: `securePassword123`
 -`vehicle`: {
   - `color`: `Red`,
   -`plate`: `BA1234`,
   - `capacity`: 4,
    -`vehicleType`: `car`
  }
}

# Captain Login API

## Endpoint
`POST /captains/login`

## Description
This endpoint authenticates an existing **Captain** (driver).  
It verifies the provided email and password against the database.  
If the credentials are valid, it returns a JWT token along with captain details.

---

## Request Body
Send JSON in the following format:

{
 - `email`: `johndoe@example.com`,
 - `password`: `securePassword123`
}

# Captain Profile API

## Endpoint
`GET /captains/profile`

## Description
This endpoint retrieves the authenticated Captain’s profile information.  
It requires a valid JWT token in the **Authorization** header or cookie.  
The token is verified, and if valid, the captain’s details are returned.

---

## Request Headers
- **Authorization**: `Bearer <jwt_token>`  
  (Alternatively, the token can be sent via cookies if your app sets it that way.)

### Field Requirements
- A valid JWT token must be provided in the request header or cookie.  
- Without the token, the request will be rejected.

---

## Response

### Success (200 OK)
{
  -`_id`: `64f1c2e9a1b2c3d4e5f6g7h8`,
  - `fullname`: {
   - `firstname`: `John`,
   - `lastname`: `Doe`
  },
 - `email`: `johndoe@example.com`,
  -`status`: `inactive`,
  -`vehicle`: {
    -`color`: `Red`,
    -`plate`: `BA1234`,
    -`capacity`: 4,
    -`vehicleType`:`car`
  },
  -`location`: {
    -`lat`: 27.7172,
    -`long`: 85.3240
  }
}

# Captain Logout API

## Endpoint
`GET /captains/logout`

## Description
This endpoint logs out the authenticated Captain.  
It requires a valid JWT token in the **Authorization** header or cookie.  
The token is cleared from cookies and added to a blacklist to prevent reuse.

---

## Request Headers
- **Authorization**: `Bearer <jwt_token>`  
  (Alternatively, the token can be sent via cookies if your app sets it that way.)

### Field Requirements
- A valid JWT token must be provided in the request header or cookie.  
- Without the token, the request will be rejected.

---

## Response

### Success (200 OK)
{
  -`message`: `Logged out`
}


