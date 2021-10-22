const router = require('express').Router()
const fs = require('fs')

router.get('/users', (req, res) => {
    fs.readFile('users.json', 'utf-8', (err,data) => {
        if (err) throw new Error(err)
        res.end(data)
    })
})

module.exports = router;