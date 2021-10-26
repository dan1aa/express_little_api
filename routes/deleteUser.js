const connection = require("../config/db.config");
const router = require("express").Router();

router.delete("/users/:userId", (req, res) => {
  let { userId } = req.params;
  connection.connect();
  connection.query(
    `DELETE FROM users WHERE id = ${userId}`,
    (error, rows, fields) => {
      if (error) throw new Error(error);
      res.status(200).end("Deleted");
    }
  );
});

module.exports = router;
