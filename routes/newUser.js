const router = require('express').Router()
const fs = require('fs')
const uuid = require('uuid')
const userList = require('../users.json')

router.post('/users/new', (req, res) => {
    let newUser = {
        id: uuid.v1(),
        name: req.body?.name || 'Name not selected',
        age: req.body?.age || "Age not selected"
    }
    userList.push(newUser)
    fs.writeFile('users.json', JSON.stringify(userList), err => {
        if (err) throw new Error(err)
    })
    res.end(JSON.stringify(newUser))
})

module.exports = router;