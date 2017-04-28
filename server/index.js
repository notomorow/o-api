const restfulServer = require('./restful-server')
const socketServer = require('./socket-server')

// const mongoose = require('./mongodb')

restfulServer.listen(2017, () => console.log(`restful server start @${new Date()}`))
socketServer.listen(2018, () => console.log(`socket server start @${new Date()}`))
