const server = require('http').createServer()
const io = require('socket.io')(server)

const apis = new Map()

io.on('connection', (socket) => {
    console.log('user connection')

    socket.on('join', function(user) {
        socket.join(user.team)
        socket.emit('apis', apis)
        console.log(`user join: [${user.username}] join [${user.team}] @${new Date()}`)
    })

    socket.on('create API', function(data) {})
    socket.on('get APIs', function(data) {})
    socket.on('update API', function(data) {})
    socket.on('delete API', function(data) {})

    socket.on('disconnect', function () {
        console.log('user disconnected')
    })
})

module.exports = server
