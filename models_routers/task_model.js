const db = require('../db.config')

function getAll() {
    return db('task')
}
function addTask(taskData) {
    return db('task')
        .insert(taskData)   
}

module.exports = {
    getAll,
    addTask
}