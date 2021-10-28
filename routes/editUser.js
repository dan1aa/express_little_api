const router = require("express").Router();
const User = require('../models/User.js')

router.patch("/users/:userId", async (req, res) => {
  try {
    let { userId } = req.params;
    let name = req.body?.name;
    let age = req.body?.age;
    if(!age || !name) throw new Error("Enter a valid values!")
    const user = await User.findOneAndUpdate({ _id: userId.toString() }, {name, age})
    res.status(200).end(JSON.stringify(user))
  }
  catch(e) {
    throw new Error(e)
  }
});

module.exports = router;
