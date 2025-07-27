# 📝 Todo API – Node.js + Express + MongoDB

A simple, secure Todo API with authentication and full CRUD support.

## 📦 Features

- 🔐 **User Authentication** – Register and log in with secure JWT-based auth  
- 🛡️ **Protected API Routes** – Access control for authenticated users only  
- ✏️ **Full Todo CRUD** – Create, Read, Update, and Delete todos seamlessly  
- 🗃️ **MongoDB + Mongoose** – Schema-based data modeling  
- 🛠️ **Robust Validation & Error Handling** – Clean error responses and field checks  


## 🛠️ Tech Stack

**Backend:**

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" />
<img src="https://img.shields.io/badge/JSON Web Tokens-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
<img src="https://img.shields.io/badge/Bcrypt-004488?style=for-the-badge&logo=OpenSSL&logoColor=white" />
<img src="https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black" />
<img src="https://img.shields.io/badge/CORS-003366?style=for-the-badge&logo=cors&logoColor=white" />



## 🚀 Getting Started

### ✅ Prerequisites

- 🟢 **Node.js** v18 or higher  
- 🍃 **MongoDB URI** (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))  
- 🔍 **API Client** like [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/) for testing


## 🚀 Installation

Follow these steps to get started with this template:

 **1. Clone the repository**

   ```bash
   git clone https://github.com/peyush-nuwal/todo-api.git
   ```

 **2. Navigate to the project directory**

   ```bash
   cd todo-api
   ```

 **3. Install dependencies**

   ```bash
   npm install
   ```
   > Or use `yarn` or `pnpm` if you prefer.

 **4. Create a .env file and add the following:**

   ```bash
  PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
   ```

 **5. Start the server in development mode**
  ```bash
  npm run dev
  ```
  
> The API will be running at: `http://localhost:5000/api`


## 📡 API Endpoints

> All routes are prefixed with: `http://localhost:5000/api`

### 🔐 Auth Routes

| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| POST   | `/register`      | Register new user   |
| POST   | `/login`         | Login and get JWT   |

---

**Request Body for `/register` and `/login`:**
```bash
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

### 📝 Todo Routes (Protected – Requires JWT)

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| GET    | `/todos/`          | Get all todos for user |
| POST   | `/todos/`          | Create a new todo      |
| PUT    | `/todos/:id`       | Update a todo by ID    |
| DELETE | `/todos/:id`       | Delete a todo by ID    |

**Example Todo Payload::**
```bash
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "status": "pending"
}
```
> 🔒 For protected routes, include the token in the `Authorization` header as:  
`Bearer your_jwt_token_here`


---


## 📁 Folder Structure

```
todo-api/
├── config/               # DB connection config
│   └── db.js
│
├── controllers/          # Route logic handlers
│   └── authController.js
│   └── todoController.js
│
├── middlewares/          # Custom middleware (auth, error handling)
│   └── authMiddleware.js
│   
│
├── models/               # Mongoose schemas
│   └── userSchema.js
│   └── todoSchema.js
│
├── routes/               # API route definitions
│   └── authRoutes.js
│   └── todoRoutes.js
│
│
├── .env                  # Environment variables
├── .gitignore
├── package.json
├── index.js             # Entry point
```


## 🔗 Connect with Me

## 📬 Contact

Feel free to connect or reach out for collaboration, feedback, or just to say hi!  

- 🌐 **Portfolio**: [peyush-nuwal-portfolio.vercel.app](https://peyush-nuwal-portfolio.vercel.app)
- 🐙 **GitHub**: [github.com/peyush-nuwal](https://github.com/peyush-nuwal)
- 💼 **LinkedIn**: [linkedin.com/in/peyush-nuwal](https://www.linkedin.com/in/peyush-nuwal/)
- ✉️ **Email**: [piyushnawal19@gmail.com](mailto:piyushnawal19@gmail.com)
- 🐦 **Twitter/X**: [@Nuwal_Peyush](https://x.com/Nuwal_Peyush)
