# 📚 Library Management System

A modern **Library Management System** built using **React + Tailwind CSS**, designed to manage books, users, and transactions efficiently. This project includes both **User** and **Admin** panels with role-based authentication.

---

## 🚀 Features

### 👤 User Panel

* 🔐 User Login & Registration
* 🔍 Search Books
* 📚 View Issued Books
* 📤 Return Books
* 💰 Pay Fine (with detailed form)
* 📊 Clean dashboard UI

---

### 👨‍💼 Admin Panel

* 🔐 Admin Login
* 📋 Product/Category Management
* 📊 Dashboard with structured table
* 📌 Maintenance / Reports / Transactions sections
* 👥 Manage system data

---

## 🎨 UI Highlights

* 🌈 Gradient-based modern UI
* 📱 Fully responsive design
* 🎴 Card-based layout
* 📊 Tables and structured forms
* ✨ Clean and user-friendly interface

---

## 🏗️ Tech Stack

| Technology   | Usage                  |
| ------------ | ---------------------- |
| React.js     | Frontend               |
| Tailwind CSS | Styling                |
| React Router | Navigation             |
| LocalStorage | Temporary data storage |

---

## 🔐 Authentication System

* Role-based login system:

  * 👤 User → User Dashboard
  * 👨‍💼 Admin → Admin Dashboard
* Data stored in browser LocalStorage

---

## 📁 Project Structure

```
src/
│
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── UserDashboard.jsx
│   ├── AdminDashboard.jsx
│   ├── SearchBooks.jsx
│   ├── IssuedBooks.jsx
│   ├── ReturnBook.jsx
│   ├── Fine.jsx
│
├── App.jsx
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/library-management-system.git
```

2. Navigate to project:

```bash
cd library-management-system
```

3. Install dependencies:

```bash
npm install
```

4. Run the app:

```bash
npm run dev
```

---

## 🧪 How to Use

1. Register a new user:

   * Select role (User / Admin)

2. Login:

   * Admin → Admin Dashboard
   * User → User Dashboard

3. Perform actions:

   * Search books
   * Issue/Return
   * Pay fines

---



---

