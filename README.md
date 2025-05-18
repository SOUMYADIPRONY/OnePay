# OnePay 💸  
A fast, secure, and user-friendly payment application for transferring funds between users.

---

## 🚀 Tech Stack

### Frontend
- **React** – Dynamic UI components  
- **Axios** – Handling API requests  
- **Tailwind CSS** – Responsive and modern styling  

### Backend
- **Express.js** – Lightweight and flexible server  
- **MongoDB** – NoSQL database for storing user information  
- **Zod** – Schema validation for user inputs  
- **JWT (JSON Web Tokens)** – Secure authentication  

---

## 🛠️ Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or later)  
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

---

### Installation

Clone the repository:
```bash
git clone https://github.com/SOUMYADIPRONY/OnePay.git
cd OnePay

Install dependencies:


cd backend && npm install
Environment Variables
Create a .env file in the root directory and add the following:

MONGO_DB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/OnePayDB
JWT_SECRET=your_secret_key

Running the Project
Start the backend server:
cd backend
node index.js



Start the frontend application:

cd frontend
npm run dev

📌 Features
✅ User authentication via JWT

✅ Balance management (dummy funds)

✅ Secure transactions between users

✅ Responsive design powered by Tailwind CSS

🚀 Future Enhancements
Implement real-time transaction notifications

Support for multiple currencies

Enhanced fraud detection mechanisms