const todo = require("../models/todoSchema")

 
  const getTodos = async(req, res) => {
    try {

      const userId = req.user._id

      const data = await todo.find({ user: userId })
      if (data.length === 0) return res.status(200).json({ message: 'No todo created', todos: data })

      res.status(200).json({ todos: data })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Server error' })
    }
    
}
 
 const createTodo=async(req, res) => {
 
   try {
     const { title, description, status } = req.body
     const userId = req.user._id


     const data = await todo.create({ title, description, status, user: userId })
     
     res.status(200).json({
       message: 'Todo created successfully',
       todo: data
     });



   } catch (error) {
     console.log(error)
     res.status(500).json({ message: 'Server error' })
   }

}

 const updateTodo = async(req, res) => {
   try {
     const { id } = req.params;
     const { title, description, status } = req.body
     const userId = req.user._id;

     // gettin todo to update
     const todoItem = await todo.findById(id)
     // Check if the todo exists and belongs to the logged-in user
     if (!todoItem) {
       return res.status(404).json({ message: 'Todo not found' });
     }

     if (todoItem.user.toString() !== userId.toString()) {
       return res.status(403).json({ message: 'Unauthorized to update this todo' });
     }

     const updatedTodo = await todo.findByIdAndUpdate(
       id,
       { title, description, status },
       { new: true, runValidators: true }
     );

     res.status(200).json({ message: 'Todo updated successfully', updatedTodo });
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' })
  }
}
 const deleteTodo = (req, res) => {
  // Logic to delete a todo
  res.status(200).json({ message: 'Todo deleted' });
}


module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};