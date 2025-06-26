# 💸 Expense Tracker (MERN Stack)

A full-stack **Expense Tracker** application developed using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. It helps users manage their expenses by allowing them to add, edit, and delete expenses, and view their balance in real-time.

---

## 🔗 Live Project

**🌐 Live Demo:**  
[https://expenses-tracker-7ue9omeol.vercel.app/](https://expenses-tracker-7ue9omeol.vercel.app/)

**📁 GitHub Repository:**  
[https://github.com/Bharani-dharan-k/Expenses-Tracker](https://github.com/Bharani-dharan-k/Expenses-Tracker)

---

## 📸 Features

- ➕ Add new expenses with title and amount
- 🔁 Edit existing expense entries
- 🗑️ Delete expenses
- 📊 Display total balance and expense history
- ⚡ Real-time updates with responsive UI
- ✅ Form validation for input fields
- 🌐 Deployed frontend (Vercel) and backend (local or cloud)

---

## 🧰 Tech Stack

### 🔹 Frontend (React.js)
- React.js
- Axios for API calls
- CSS (custom responsive design)

### 🔹 Backend (Node.js + Express.js)
- Express.js REST API
- Mongoose (ODM for MongoDB)
- MongoDB (local or Atlas cloud DB)
- CORS, dotenv for middleware and environment management

---

## 📁 Project Structure

Expenses-Tracker/
│
├── backend/ # Node.js + Express backend
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes
│ ├── server.js # Entry point
│ └── .env # Environment variables
│
├── frontend/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── ExpenseForm.jsx
│ │ │ ├── ExpenseContainer.jsx
│ │ │ ├── BalanceContainer.jsx
│ │ │ └── History.jsx
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
└── README.md


---

## 🛠️ Installation Instructions

### ⚙️ Prerequisites
- Node.js & npm installed
- MongoDB installed or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account
- Git

---

### 🚀 Backend Setup

```bash
# Clone the repository
git clone https://github.com/Bharani-dharan-k/Expenses-Tracker.git
cd Expenses-Tracker

# Navigate to backend
cd backend

# Install backend dependencies
npm install

# Create a .env file and add your MongoDB URI
touch .env
📄 .env content
ini
Copy
Edit
MONGO_URI=mongodb://localhost:27017/expense-tracker
PORT=3000
bash
Copy
Edit
# Run backend server
node server.js
💻 Frontend Setup
bash
Copy
Edit
# Navigate to frontend
cd ../frontend

# Install frontend dependencies
npm install

# Start React app
npm start
Visit http://localhost:3000 to view the app locally.
