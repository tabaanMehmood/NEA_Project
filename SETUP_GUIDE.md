# Setup Guide: React Frontend + SQLite3 Database Connection

This guide explains how to run the full stack application with React frontend connected to SQLite3 database.

## Prerequisites

- Python 3.x installed
- Node.js and npm installed
- SQLite3 (usually comes with Python)

## Setup Steps

### 1. Install Backend Dependencies

```bash
cd NEA_BACK
pip install -r requirements.txt
```

Or:
```bash
pip3 install -r requirements.txt
```

### 2. Install Frontend Dependencies (if not already installed)

```bash
cd NEA_UI
npm install
```

### 3. Start the Backend Server

Open a terminal and run:
```bash
cd NEA_BACK
python app.py
```

Or:
```bash
python3 app.py
```

The server will start on `http://localhost:5000` and automatically:
- Create the `users` table in `my_database.db` if it doesn't exist
- Enable CORS to accept requests from the React frontend

### 4. Start the React Frontend

Open another terminal and run:
```bash
cd NEA_UI
npm run dev
```

The frontend will start on `http://localhost:5173` (or similar, check the terminal output).

## Using the Registration Form

1. Open your browser and navigate to the React app (usually `http://localhost:5173`)
2. Click "Sign Up" tab
3. Fill in:
   - Username
   - Email
   - Password
   - Select "Teacher" or "Student"
4. Click "Sign Up"
5. The data will be saved to the SQLite3 database (`my_database.db`)

## Database Location

The database file is located at:
```
/Users/tabaanmehmood/Documents/NEA_Project/my_database.db
```

## API Endpoints

- **POST** `/api/register` - Register a new user
- **POST** `/api/login` - Authenticate a user
- **GET** `/api/health` - Health check

See `NEA_BACK/README.md` for detailed API documentation.

## Troubleshooting

### Backend won't start
- Make sure Python dependencies are installed: `pip install -r requirements.txt`
- Check if port 5000 is already in use

### Frontend can't connect to backend
- Make sure the backend server is running on `http://localhost:5000`
- Check browser console for CORS errors (should be resolved with flask-cors)

### Database errors
- The database file is automatically created if it doesn't exist
- The `users` table is automatically created on server startup
- Check file permissions for `my_database.db`

## Notes

- Passwords are securely hashed using Werkzeug before storage
- User data is stored in localStorage after successful registration/login
- Both Sign In and Sign Up forms now connect to the database

