const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
    todo: String,
    userId: String,
    isCompleted: { type: Boolean, default: false }
});

mongoose.model('todos', todoSchema);
