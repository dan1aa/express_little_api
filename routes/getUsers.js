const router = require("express").Router();
const User = require("../models/User.js");

router.get("/users", async (req, res) => {
  const users = await User.find()
    .then((data) => {
      res.status(200).end(JSON.stringify(data));
    })
    .catch((err) => {
      throw new Error(err);
    });
});

module.exports = router;
