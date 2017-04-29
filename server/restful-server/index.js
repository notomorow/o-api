const restify = require('restify')
const server = restify.createServer()
server.use(restify.queryParser())
server.use(restify.bodyParser())
server.use(restify.CORS())

server.get('/api/time', (req, res, next) => res.send(new Date().toLocaleString()))

const user = require('./user')
server.post('/api/login', user.login)
server.post('/api/register', user.register)

module.exports = server
