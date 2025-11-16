# NEA Backend API

Flask API server for connecting the React frontend with the SQLite3 database.

## Setup

1. Install Python dependencies:
```bash
cd NEA_BACK
pip install -r requirements.txt
```

Or using pip3:
```bash
pip3 install -r requirements.txt
```

## Running the Server

Start the Flask server:
```bash
python app.py
```

Or using python3:
```bash
python3 app.py
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST /api/register
Register a new user

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "Teacher" or "Student",
  "qualificationLevel": "A-Level",
  "subject": "Mathematics",
  "subjectID": "MAT001",
  "examBoard": "AQA",
  "classroomID": "CLASS123",
  "classroomCode": "ABC123",
  "studyroomID": "STUDY456",
  "studyroomCode": "XYZ789"
}
```

**Note:** All fields except `username`, `email`, and `password` are optional. You can also use `user_type` instead of `role` for backward compatibility.

**Response (201):**
```json
{
  "message": "User registered successfully",
  "user_id": 1,
  "username": "john_doe",
  "role": "Teacher"
}
```

### POST /api/login
Authenticate a user

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "user_id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "role": "Teacher",
  "qualificationLevel": "A-Level",
  "subject": "Mathematics",
  "subjectID": "MAT001",
  "examBoard": "AQA",
  "classroomID": "CLASS123",
  "classroomCode": "ABC123",
  "studyroomID": "STUDY456",
  "studyroomCode": "XYZ789",
  "user_type": "Teacher"
}
```

### GET /api/health
Health check endpoint

## Database

The database file is located at: `../my_database.db`

The server automatically creates a `users` table on startup if it doesn't exist with the following schema:

**Users Table Schema:**
- `id` (INTEGER, PRIMARY KEY, AUTOINCREMENT)
- `username` (TEXT, NOT NULL, UNIQUE)
- `email` (TEXT, NOT NULL, UNIQUE)
- `password` (TEXT, NOT NULL) - Hashed password
- `role` (TEXT) - Teacher or Student
- `qualificationLevel` (TEXT)
- `subject` (TEXT)
- `subjectID` (TEXT)
- `examBoard` (TEXT)
- `classroomID` (TEXT)
- `classroomCode` (TEXT)
- `studyroomID` (TEXT)
- `studyroomCode` (TEXT)
- `created_at` (TIMESTAMP) - Auto-generated timestamp

**Database Migration:**
If you have an existing database with the old schema (using `user_type`), the server will automatically:
- Migrate `user_type` data to the `role` column
- Add any missing new columns to existing tables

## Notes

- Passwords are hashed using Werkzeug's password hashing
- The database is initialized automatically when the server starts
- CORS is enabled to allow requests from the React frontend

