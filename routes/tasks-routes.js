const mongoose = require('mongoose');

const requireLogin = require('../middleware/requireLogin');
const Task = mongoose.model('tasks');

module.exports = app => {
    app.get('/api/tasks/', requireLogin, async (req, res) => {
        const tasks = await Task.find({
            userId: req.user._id
        });

        res.send(tasks);
    });

    app.post('/api/tasks', requireLogin, async (req, res) => {
        const { description, type } = req.body;
        console.log(type);
        const task = await new Task({
            description,
            type,
            userId: req.user._id
        }).save();

        res.status(200).send(task);
    });

    app.delete('/api/tasks/:id', requireLogin, async (req, res) => {
        const task = await Task.findOneAndRemove({
            _id: req.params.id,
            userId: req.user._id
        });

        res.send(task);
    });

    app.patch('/api/tasks/:id', requireLogin, async (req, res) => {
        const task = await Task.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.user._id
            },
            {
                $set: req.body
            },
            { new: true }
        );

        res.send(task);
    });
};
