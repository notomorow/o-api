const restfulServer = require('./restful-server')
const socketServer = require('./socket-server')
const config = require('../config')

// const mongoose = require('./mongodb')

restfulServer.listen(config.RESTFUL_PORT, () => console.log(`restful server start @${new Date()}`))
socketServer.listen(config.SOCKET_PORT, () => console.log(`socket server start @${new Date()}`))
