const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
    todo: String,
    userId: String,
    status: String
});

mongoose.model('todos', todoSchema);
