const server = require('http').createServer()
const io = require('socket.io')(server)
const mongoose = require('../mongodb.js')

const rooms = Object.create(null)

io.on('connection', (socket) => {
    console.log('user connection')

    socket.on('join', function(user) {
        const room = user.team
        if (!(room in rooms)) {
            rooms[room] = Object.create(null)
        }
        socket.join(room)
        socket.userRoom = room

        socket.emit('APIs', rooms[room])
        console.log(`user join: ${user.username} join ${room} @${new Date()}`)
    })

    socket.on('create APIs', function(data) {
        const APIId = mongoose.Types.ObjectId()
        rooms[socket.userRoom][APIId] = data
        
        const newAPI = Object.create(null)
        newAPI[APIId] = data
        io.in(socket.userRoom).emit('create APIs', newAPI)
        console.log('create APIs: ', data)
    })
    socket.on('get APIs', function(data) {})
    socket.on('update API', function(data) {})
    socket.on('delete API', function(data) {})

    socket.on('disconnect', function () {
        console.log('user disconnected')
    })
})

module.exports = server
