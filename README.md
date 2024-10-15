# Password Complexity Checker

This project is a desktop application that helps users evaluate the strength of their passwords in real time. It provides feedback based on various security criteria, ensuring users can create strong, secure passwords.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Features
- **Real-time Feedback**: Dynamically evaluates password strength as the user types.
- **Password Visibility Toggle**: Users can easily show or hide their passwords.
- **Copy to Clipboard**: Quick copy functionality for generated passwords.
- **Criteria Checklist**: Displays which password requirements are met for added security awareness.

## Technology Stack
- **Frontend**: HTML, CSS (Glassmorphism Design), JavaScript
- **Backend**: Python (with Eel)

## Prerequisites
Before you begin, ensure you have the following installed:
- Python (version 3.7 or later)

## Installation
1. Clone the repository from GitHub.
   ```bash
   git clone https://github.com/udaypali/PRODIGY_CS_03.git
   cd PRODIGY_CS_03

## Creating a Virtual Environment
2. Create a new virtual environment for the project.
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # For Windows: venv\Scripts\activate
   pip install -r requirements.txt

## Installing Frontend Dependencies
3. Install frontend dependencies.
   ```bash
   pip install eel

## Running the Application

### Start the Python Backend
```bash
python main.py
```

## Usage
-Open the application in your default browser.
-Enter a password into the input field to see real-time feedback on its strength.
-Use the toggle button to view or hide your password.
-Click the "Copy" button to copy the password to your clipboard.


## File Structure
```bash
assets/           # Contains images and other assets used in the application
gui/              # Contains HTML, CSS, and JavaScript files for the user interface
├── index.html    # Main HTML file
├── style.css     # Stylesheet for the application
└── app.js        # JavaScript logic for real-time password checking
main.py           # The Python backend logic
README.md         # Documentation for the project
```

## Dependencies
The application depends on the following libraries:
- **Eel**: To enable desktop applications with HTML/JS frontend.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

**Disclaimer**: The author is not responsible for any misuse of this application. Use it at your own risk.