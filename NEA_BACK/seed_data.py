import sqlite3
import os
from werkzeug.security import generate_password_hash

DB_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'my_database.db')

seed_data = [
    ['teacher1', 'teacher1@email.com', 'teach1pass', 'Teacher', 'A-Level', 'Computer Science', '1', 'OCR', '1', 'GT3S0', None, None],
    ['student1', 'student1@email.com', 'student1pass', 'Student', 'A-Level', 'Computer Science', '1', 'OCR', '1', 'GT3S0', '1', 'AW9D2'],
    ['teacher2', 'teacher2@email.com', 'teach2pass', 'Teacher', 'A-Level', 'Mathematics', '2', 'Edexcel', '2', 'FW9V8', None, None],
    ['student2', 'student2@email.com', 'student2pass', 'Student', 'A-Level', 'Mathematics', '2', 'Edexcel', '2', 'FW9V8', '1', 'BR2G9'],
    ['teacher3', 'teacher3@email.com', 'teach3pass', 'Teacher', 'A-Level', 'Economics', '3', 'Edexcel', '3', 'CW3Y2', None, None],
    ['student3', 'student3@email.com', 'student3pass', 'Student', 'A-Level', 'Economics', '3', 'Edexcel', '3', 'CW3Y2', '2', 'VW0V3'],
    ['teacher4', 'teacher4@email.com', 'teach4pass', 'Teacher', 'A-Level', 'Physics', '4', 'AQA', '4', 'AQ7N7', None, None],
    ['student4', 'student4@email.com', 'student4pass', 'Student', 'A-Level', 'Physics', '4', 'AQA', '4', 'AQ7N7', '2', 'DK8V5'],
]

def seed_database():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Ensure the users table exists (with all columns)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            user_type TEXT,
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
    
    inserted_count = 0
    skipped_count = 0
    
    for user_data in seed_data:
        username, email, password, user_type, qualificationLevel, subject, subjectID, examBoard, classroomID, classroomCode, studyroomID, studyroomCode = user_data
        
        # Check if user already exists
        cursor.execute('SELECT id FROM users WHERE username = ? OR email = ?', (username, email))
        existing_user = cursor.fetchone()
        
        if existing_user:
            print(f"Skipping {username} - already exists")
            skipped_count += 1
            continue
        
        # Hash the password
        password_hash = generate_password_hash(password, method="pbkdf2:sha256")
        
        # Insert user
        try:
            cursor.execute('''
                INSERT INTO users (
                    username, email, password, user_type, qualificationLevel,
                    subject, subjectID, examBoard, classroomID, classroomCode,
                    studyroomID, studyroomCode
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                username, email, password_hash, user_type, qualificationLevel,
                subject, subjectID, examBoard, classroomID, classroomCode,
                studyroomID, studyroomCode
            ))
            print(f"Added {username} ({user_type}) - {subject}")
            inserted_count += 1
        except sqlite3.IntegrityError as e:
            print(f"Error inserting {username}: {e}")
            skipped_count += 1
    
    conn.commit()
    conn.close()
    
    print(f"\n{'='*50}")
    print(f"Database seeding complete!")
    print(f"Inserted: {inserted_count} users")
    print(f"Skipped: {skipped_count} users (already exist)")
    print(f"{'='*50}")

if __name__ == '__main__':
    print("Starting database seeding...")
    print(f"Database location: {DB_PATH}\n")
    seed_database()

