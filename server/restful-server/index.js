const restify = require('restify')
const server = restify.createServer()
server.use(restify.queryParser())
server.use(restify.bodyParser())
server.use(restify.CORS())

server.get('/api/time', (req, res, next) => {
    console.log('time')
    res.send(new Date().toLocaleString())
})

module.exports = server


