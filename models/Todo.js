const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
    todo: String,
    userId: String,
    status: { type: String, default: 'do-it' }
});

mongoose.model('todos', todoSchema);
