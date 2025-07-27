const express = require('express'); 
const {connectToDatabase} = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT|| 3000;
app.use(express.json());
app.use(cookieParser());
connectToDatabase()


app.get("/", (req, res) => {
     res.send("hello world");
})

app.use("/api/todos", todoRoutes )
app.use("/api/auth", authRoutes )

app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
})