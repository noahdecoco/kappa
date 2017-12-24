const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
    description: String,
    userId: String,
    type: String
});

mongoose.model('tasks', taskSchema);
