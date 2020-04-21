const db = require('../db.config')

function getAll() {
    return db('task')
        .join('project', 'task.project_id', 'project.id')
        // .select('task', 'task.project.name', 'project.description')
        
        
}
function addTask(taskData) {
    return db('task')
        .insert(taskData)   
}

module.exports = {
    getAll,
    addTask
}