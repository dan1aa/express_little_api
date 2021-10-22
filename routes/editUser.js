const router = require('express').Router()
const fs = require('fs')
const userList = require('../users.json')

router.patch('/users/:userId', (req, res) => {
    let { userId } = req.params;
    let currentUser = userList.find(user => user.id === userId)
    if (currentUser) {
        currentUser.name = req.body?.name || currentUser.name
        currentUser.age = req.body?.age || currentUser.age
        fs.writeFile('users.json', JSON.stringify(userList), err => {
            if (err) throw new Error(err)
        })
        res.end(JSON.stringify(currentUser))
    }
    else {
        res.status(404).end('User not found')
    }
})

module.exports = router;