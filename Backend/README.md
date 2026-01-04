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
Requirements

fullname.firstname: required, string, min length 3

fullname.lastname: optional, string, min length 3 (if provided)

email: required, valid email, unique, min length 5

password: required, string, min length 6

Status Codes
201 Created – User registered successfully, returns JWT and user object

400 Bad Request – Validation errors

409 Conflict – Email already exists

500 Internal Server Error – Unexpected server issue

User Login API
Endpoint
POST /users/login

Description
Authenticates an existing user. Verifies email and password, and returns a JWT token with user details if valid.

Request Body
json
{
  "email": "johndoe@example.com",
  "password": "securePassword123"
}
Requirements

email: required, valid email format

password: required, string

Status Codes
200 OK – Login successful, returns JWT and user object

400 Bad Request – Validation errors (missing fields, invalid email format)

401 Unauthorized – Invalid email or password

500 Internal Server Error – Unexpected server issue

User Profile API
Endpoint
GET /users/profile

Description
Retrieves the authenticated user's profile information. Requires a valid JWT token in the Authorization header.

Request Headers
Authorization: Bearer <jwt_token>

Requirements

Must include a valid JWT token in the header

Status Codes
200 OK – Returns user profile object

401 Unauthorized – Missing or invalid token

500 Internal Server Error – Unexpected server issue

User Logout API
Endpoint
POST /users/logout

Description
Logs out the authenticated user. Requires a valid JWT token in the Authorization header.
Depending on implementation, logout may invalidate the token or simply remove it client-side.

Request Headers
Authorization: Bearer <jwt_token>

Requirements

Must include a valid JWT token in the header

Status Codes
200 OK – Logout successful, returns confirmation message

401 Unauthorized – Missing or invalid token

500 Internal Server Error – Unexpected server issue

Summary
/users/register → Register new users with fullname, email, and password.

/users/login → Authenticate with email and password.

/users/profile → Fetch authenticated user details (JWT required).

/users/logout → End session (JWT required).