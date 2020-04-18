const express = require('express')

const cors = require('cors')

const helmet = require('helmet')

const someRouter = require('path')

const server = express()

//Middleware
server.use(helmet())
server.use(cors())
server.use(express.json())
server.use('/TABLE', someRouter)

module.exports = server;

