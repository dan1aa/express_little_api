const router = require('express').Router()
const connection = require('../config/db.config.js')

router.patch('/users/:userId', (req, res) => {
    connection.connect()
    let { userId } = req.params;
    let name = req.body?.name;
    let age = req.body?.age;
    connection.query(`Update users set name = "${name}", age = ${age} where id = ${userId}`, (error, rows, fields) => {
        if (error) throw new Error(error)
        res.end("Edited")
    })
    connection.end()
})

module.exports = router;