const router = require("express").Router();
const User = require("../models/User");

router.delete("/users/:userId", async (req, res) => {
  try {
    let { userId } = req.params;
    await User.findOneAndDelete({ _id: userId.toString() });
    res.status(200).end(`User with id: ${userId} , deleted!`);
  } 
  catch (e) {
    throw new Error(e);
  }
});

module.exports = router;
