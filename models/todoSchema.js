const mongoose = require('mongoose');
const { Schema } = mongoose;
 

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
        
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    
}, { timestamps: true })

const todo = mongoose.model('todo', todoSchema);
module.exports = todo;