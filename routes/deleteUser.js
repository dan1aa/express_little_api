const router = require('express').Router()
const fs = require('fs')
const userList = require('../users.json')

router.delete('/users/:userId', (req, res) => {
    let { userId } = req.params;
    let updatedUserList = userList.filter(user => user.id !== userId)
    fs.writeFile('users.json', JSON.stringify(updatedUserList), err => {
        if (err) throw new Error(err)
    })
    res.end(JSON.stringify(updatedUserList))
})

module.exports = router;