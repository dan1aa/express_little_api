const router = require("express").Router();
const User = require("../models/User");

router.post("/users/new", async (req, res) => {
  try {
    let name = req.body.name;
    let age = req.body.age;
    if(!age || !name) throw new Error('Enter a valid values!')
    const newUser = new User({
      name,
      age
    })
    await newUser.save();
    res.status(200).end(`User with id: ${newUser._id} , added!`)
  }
  catch(e) {
    throw new Error(e)
  }
});

module.exports = router;
