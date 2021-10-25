const connection = require('../config/db.config');
const router = require('express').Router()

router.delete('/users/:userId', (req, res) => {
    let { userId } = req.params;
    connection.connect()
    connection.query(`Delete from users where id = ${userId}`, (error, rows, fields) => {
        if(error) throw new Error(error)
        res.end('Deleted')
    })
})

module.exports = router;