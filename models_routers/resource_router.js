const express = require('express')

const Resource= require('./resource_model')

const router = express.Router();

router.get('/', (req, res) =>{
    Resource.getAll()
        .then(item => {
            res.json(item);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get resources'})
        })
})

router.post('/', (req, res) => {
    const resourceData = req.body;

    Resource.addResource(resourceData)
        .then(ids => {
            res.status(201).json({created: ids[0]})
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to add new resource'})
        })
})
module.exports= router;