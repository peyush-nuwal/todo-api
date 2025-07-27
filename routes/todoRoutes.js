 const express = require('express');
const router = express.Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const verifyUser = require('../middleware/authMiddleware');


router.get('/', verifyUser, getTodos);
router.post('/create', verifyUser, createTodo);
router.put('/update/:id' ,verifyUser, updateTodo);
router.delete('/delete/:id' ,verifyUser,  deleteTodo);


module.exports = router;