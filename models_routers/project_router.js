const express = require('express')

const Project = require('./project_model')

const router = express.Router();

router.get('/', (req, res) =>{
    Project.getAll()
        .then(item => {
            res.json(item);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get projects'})
        })
})

router.post('/', (req, res) => {
    const projectData = req.body;

    Project.addProject(projectData)
        .then(ids => {
            res.status(201).json({created: ids[0]})
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to add new project'})
        })
})