from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Database path
DB_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'my_database.db')

def init_db():
    """Initialize the database with a users table if it doesn't exist"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Create users table with all required fields
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            role TEXT,
            qualificationLevel TEXT,
            subject TEXT,
            subjectID TEXT,
            examBoard TEXT,
            classroomID TEXT,
            classroomCode TEXT,
            studyroomID TEXT,
            studyroomCode TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Check if old user_type column exists and migrate if needed
    cursor.execute("PRAGMA table_info(users)")
    columns = [column[1] for column in cursor.fetchall()]
    
    # Add new columns if they don't exist (for existing databases)
    new_columns = [
        ('qualificationLevel', 'TEXT'),
        ('subject', 'TEXT'),
        ('subjectID', 'TEXT'),
        ('examBoard', 'TEXT'),
        ('classroomID', 'TEXT'),
        ('classroomCode', 'TEXT'),
        ('studyroomID', 'TEXT'),
        ('studyroomCode', 'TEXT')
    ]
    
    for col_name, col_type in new_columns:
        if col_name not in columns:
            try:
                cursor.execute(f'ALTER TABLE users ADD COLUMN {col_name} {col_type}')
            except sqlite3.OperationalError:
                pass  # Column might already exist
    
    conn.commit()
    conn.close()
    print("Database initialized successfully")

@app.route('/api/register', methods=['POST'])
def register():
    """Register a new user"""
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data or not all(key in data for key in ['username', 'email', 'password']):
            return jsonify({'error': 'Missing required fields: username, email, password'}), 400
        
        username = data['username'].strip()
        email = data['email'].strip()
        password = data['password']
        
        role = data.get('role')  
        qualificationLevel = data.get('qualificationLevel')
        subject = data.get('subject')
        subjectID = data.get('subjectID')
        examBoard = data.get('examBoard')
        classroomID = data.get('classroomID')
        classroomCode = data.get('classroomCode')
        studyroomID = data.get('studyroomID')
        studyroomCode = data.get('studyroomCode')

        if '@' not in email:
            return jsonify({'error': 'Invalid email format'}), 400
        
        password_hash = generate_password_hash(password)
        
        # Connect to database
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        cursor.execute('SELECT id FROM users WHERE username = ? OR email = ?', (username, email))
        existing_user = cursor.fetchone()
        
        if existing_user:
            conn.close()
            return jsonify({'error': 'Username or email already exists'}), 409
        
        # Insert new user with all fields
        cursor.execute('''
            INSERT INTO users (
                username, email, password, role, qualificationLevel, 
                subject, subjectID, examBoard, classroomID, classroomCode, 
                studyroomID, studyroomCode
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            username, email, password_hash, role, qualificationLevel,
            subject, subjectID, examBoard, classroomID, classroomCode,
            studyroomID, studyroomCode
        ))
        
        conn.commit()
        user_id = cursor.lastrowid
        conn.close()
        
        return jsonify({
            'message': 'User registered successfully',
            'user_id': user_id,
            'username': username,
            'role': role
        }), 201
        
    except sqlite3.Error as e:
        return jsonify({'error': f'Database error: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@app.route('/api/login', methods=['POST'])
def login():
    """Authenticate a user"""
    try:
        data = request.get_json()
        
        if not data or not all(key in data for key in ['email', 'password']):
            return jsonify({'error': 'Missing required fields: email, password'}), 400
        
        email = data['email'].strip()
        password = data['password']
        
        # Connect to database
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        # Find user by email - get all user fields
        cursor.execute('''
            SELECT id, username, email, password, role, qualificationLevel, 
                   subject, subjectID, examBoard, classroomID, classroomCode, 
                   studyroomID, studyroomCode 
            FROM users WHERE email = ?
        ''', (email,))
        user = cursor.fetchone()
        conn.close()
        
        if not user:
            return jsonify({'error': 'Invalid email or password'}), 401
        
        (user_id, username, user_email, password_hash, role, qualificationLevel,
         subject, subjectID, examBoard, classroomID, classroomCode,
         studyroomID, studyroomCode) = user
        
        # Verify password
        if not check_password_hash(password_hash, password):
            return jsonify({'error': 'Invalid email or password'}), 401
        
        return jsonify({
            'message': 'Login successful',
            'user_id': user_id,
            'username': username,
            'email': user_email,
            'role': role,
            'qualificationLevel': qualificationLevel,
            'subject': subject,
            'subjectID': subjectID,
            'examBoard': examBoard,
            'classroomID': classroomID,
            'classroomCode': classroomCode,
            'studyroomID': studyroomID,
            'studyroomCode': studyroomCode,
            # Backward compatibility
            'user_type': role
        }), 200
        
    except sqlite3.Error as e:
        return jsonify({'error': f'Database error: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'OK', 'message': 'Backend is running'}), 200

if __name__ == '__main__':
    # Initialize database on startup
    init_db()
    print(f"Starting Flask server on http://localhost:5000")
    print(f"Database path: {DB_PATH}")
    app.run(debug=True, port=5000)

