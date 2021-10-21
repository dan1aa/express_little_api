const router = require('express').Router()

router.get('/', (req, res) => {
    res.end('Main page')
})

module.exports = router;