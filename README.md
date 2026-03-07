# FastAPI Task Manager

## Project Overview

A full-stack task management application built with FastAPI.
Users can register, log in with JWT authentication, and manage their tasks.

## Features

* User registration and login
* JWT authentication
* Create tasks
* Update tasks
* Delete tasks
* Pagination
* Filtering tasks by completion status

## Tech Stack

Backend: FastAPI, SQLAlchemy
Frontend: HTML, JavaScript
Database: SQLite

## Setup Instructions

### 1. Clone the repository

git clone https://github.com/yourusername/fastapi-task-manager.git

### 2. Install dependencies

pip install -r requirements.txt

### 3. Run server

uvicorn app.main:app --reload

### 4. Open API docs

http://127.0.0.1:8000/docs

## Environment Variables

Create a `.env` file:

SECRET_KEY=mysecretkey
ALGORITHM=HS256

## Deployment

Live URL: https://your-app.onrender.com

## Author

Nivetha D
