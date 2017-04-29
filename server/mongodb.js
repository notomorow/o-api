const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set('debug', true)

const DB_ADDRESS = 'mongodb://127.0.0.1:27017/oapi'
mongoose.connect(DB_ADDRESS)

const db = mongoose.connection
db.on('error', (err) => console.error(`mongodb connection err: ${err}`))
db.on('open', () => console.log(`mongodb connection ok @${new Date()}`))

mongoose.Users = mongoose.model('Users', {
    username: String,
    password: String,
    team: String,
    createTime: Date
})

module.exports = mongoose
