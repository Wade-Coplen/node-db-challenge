const db = require('../db.config')

function getAll() {
    return db('project')
}
function addProject(projectData) {
    return db('project')
        .insert(projectData)   
}

module.exports = {
    getAll,
    addProject
}
