const mongodb = require('../mongodb')
Users = mongodb.Users

function login(req, res, next) {
    const content = {
        username: req.params.username,
        password: req.params.password
    }
    Users.find(content)
        .then((docs) => {
            res.send(200, {
                success: docs.length !== 0
            })
        })
}

function register(req, res, next) {
    const content = {
        username: req.params.username,
        password: req.params.password,
        team: req.params.team
    }
    Users.find({ username: content.username })
        .then((docs) => {
            if (docs.length === 0) {
                new Users(Object.assign({}, content, { createTime: new Date() })).save(() => {
                    res.send(200, {
                        ok: true
                    })
                })
            } else {
                res.send(200, {
                    ok: false
                })
            }
        })

}

module.exports = {
    login,
    register
}