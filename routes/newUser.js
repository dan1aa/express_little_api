const router = require('express').Router()
const connection = require('../config/db.config.js')

router.post('/users/new', (req, res) => {
    connection.connect()
    let username = req.body.name;
    let userage = req.body.age;
    connection.query(`Insert into users(name, age) values("${username}", ${userage})`, (error, rows, fields) => {
        if (error) throw new Error(error)
        res.end("Added")
    })
    connection.end()
})

module.exports = router;