const router = require("express").Router();
const connection = require("../config/db.config.js");

router.patch("/users/:userId", (req, res) => {
  connection.connect();
  let { userId } = req.params;
  let name = req.body?.name;
  let age = req.body?.age;
  if(!age || !name) throw new Error("Enter a valid values!")
  connection.query(
    `UPDATE users SET name = "${name}", age = ${age} WHERE id = ${userId}`,
    (error, rows, fields) => {
      if (error) throw new Error(error);
      res.status(200).end("Edited");
    }
  );
  connection.end();
});

module.exports = router;
