const router = require('express').Router()
const connection = require('../config/db.config.js')

router.get('/users', (req, res) => {
    connection.connect()
    connection.query("Select name, age from users", (error, rows, fields) => {
        if (error) throw new Error(error)
        let users = [];
        for(let i = 0; i < rows.length; i++) {
            users.push(rows[i])
        }
        res.end(JSON.stringify(users));
        connection.end()
    })
})

module.exports = router;