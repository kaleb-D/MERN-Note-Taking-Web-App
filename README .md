<h1 align="center">📝 MERN Stack Note Taking App ✨</h1>

<p align="center">
  A fully responsive <b>MERN Stack</b> application for taking notes — built for learning, practice, and deployment.
</p>

---

## 🚀 Features

- 🧱 **Full-Stack MERN App** – MongoDB, Express, React, Node.js  
- ✨ **CRUD Functionality** – Create, Update, and Delete notes with title & description  
- 🛠️ **REST API** – Tested & ready for real-world use  
- ⚡ **Rate Limiting** – Implemented using Upstash Redis  
- 📱 **Responsive UI** – Works across devices  
- 🌐 **Learning-Oriented** – Covers HTTP methods, status codes, and SQL vs NoSQL basics  
- 📦 **Deployment Guide** – Add a live project to your portfolio  
- 📚 **Beginner-Friendly** – Simple, clean, and easy to extend  

---

## 📂 Project Structure

```
MERN-Note-App/
│
├── backend/        # Express + MongoDB API
├── frontend/       # React frontend
└── README.md
```

---

## 🔑 Environment Variables

Create a `.env` file inside **`/backend`** with the following:

```env
MONGO_URI=<your_mongo_uri>

UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```

---

## 🖥️ Running the Project Locally

### 1️⃣ Start the Backend
```bash
cd backend
npm install
npm run dev
```

### 2️⃣ Start the Frontend
```bash
cd frontend
npm install
npm run dev
```
