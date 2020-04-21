const express = require('express')

const Task = require('./task_model')

const router = express.Router();

router.get('/', (req, res) =>{
    Task.getAll()
        .then(item => {
            res.json(item);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get tasks'})
        })
})

router.post('/', (req, res) => {
    const taskData = req.body;

    Task.addTask(taskData)
        .then(ids => {
            res.status(201).json({created: ids[0]})
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to add new task'})
        })
})
module.exports= router;