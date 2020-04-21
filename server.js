const express = require('express')

const cors = require('cors')

const helmet = require('helmet')

const projectRouter = require('./models_routers/project_router')
const resourceRouter = require('./models_routers/resource_router')
const taskRouter = require('./models_routers/task_router')

const server = express()

//Middleware
server.use(helmet())
server.use(cors())

server.use(express.json())
server.use('/project', projectRouter)
server.use('/resource', resourceRouter)
server.use('/task', taskRouter)


module.exports = server;

