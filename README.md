# Learning Management System (LMS) - MERN Stack

This is a **full-stack Learning Management System (LMS)** built using the **MERN (MongoDB, Express, React, Node.js) stack**. The LMS allows students to enroll in courses, instructors to create courses, and administrators to manage the system.

## Features

- **User Authentication** (Students, Instructors, Admins)
- **Course Management** (Create, Update, Delete Courses)
- **Lesson Management** (Text and Video Lessons)
- **Assignments & Submissions** (Upload & Grading System)
- **Payment Integration** (Stripe/PayPal for Paid Courses)
- **Review & Ratings System**
- **Admin Dashboard**

## Tech Stack

### Backend (Node.js + Express + MongoDB)

- **Express.js** - Web framework for Node.js
- **MongoDB + Mongoose** - NoSQL Database and ORM
- **bcrypt.js** - Password hashing
- **jsonwebtoken** - Authentication
- **Multer** - File Uploads (for assignments, videos, etc.)
- **Stripe/PayPal SDK** - Payment processing
- **Nodemailer** - Email notifications

### Frontend (React.js)

- **React Router** - Navigation
- **Redux Toolkit** - State Management
- **Axios** - API Requests
- **Formik & Yup** - Form validation
- **Tailwind CSS** - UI Styling
- **React Player** - Video playback
- **Toast Notifications** - User alerts

## Installation & Setup

### Prerequisites

- **Node.js** (v16+ recommended)
- **MongoDB** (Local or Cloud instance like MongoDB Atlas)
- **Stripe** (For payments, optional)

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/lms-mern.git
   cd lms-mern/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the backend folder and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   STRIPE_SECRET_KEY=your_stripe_key
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup

1. Navigate to frontend folder:
   ```sh
   cd ../lms-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend app:
   ```sh
   npm start
   ```

## API Routes

### User Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/users/:id` - Get user details

### Course Routes

- `POST /api/courses` - Create a course (Instructor only)
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course details
- `POST /api/courses/enroll/:id` - Enroll in a course

### Assignment Routes

- `POST /api/assignments` - Create an assignment
- `POST /api/assignments/submit/:id` - Submit assignment

### Payment Routes

- `POST /api/payments` - Process course payment
