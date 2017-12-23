const mongoose = require('mongoose');

const requireLogin = require('../middleware/requireLogin');
const Todo = mongoose.model('todos');

module.exports = app => {
    app.get('/api/todos/', requireLogin, async (req, res) => {
        const todos = await Todo.find({
            userId: req.user._id
        });

        res.send(todos);
    });

    app.post('/api/todos', requireLogin, async (req, res) => {
        const todo = await new Todo({
            todo: req.body.todo,
            userId: req.user._id
        }).save();

        res.status(200).send(todo);
    });

    app.delete('/api/todos/:id', requireLogin, async (req, res) => {
        const todo = await Todo.findOneAndRemove({
            _id: req.params.id,
            userId: req.user._id
        });

        res.send(todo);
    });

    app.patch('/api/todos/:id', requireLogin, async (req, res) => {
        const todo = await Todo.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.user._id
            },
            {
                $set: req.body
            },
            { new: true }
        );

        res.send(todo);
    });
};
