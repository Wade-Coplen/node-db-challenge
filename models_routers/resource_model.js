const db = require('../db.config')

function getAll() {
    return db('resource')
}
function addResource(resourceData) {
    return db('resource')
        .insert(resourceData)   
}

module.exports = {
    getAll,
    addResource
}