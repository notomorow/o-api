const server = require('http').createServer()
const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log('user connection')

    socket.on('join', function(user) {
        socket.join(user.team)
        console.log(`user join: [${user.username}] join [${user.team}] @${new Date()}`)
    })

    socket.on('disconnect', function () {
        console.log('user disconnected')
    })
})

module.exports = server
