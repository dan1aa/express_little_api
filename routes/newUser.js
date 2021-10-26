const router = require("express").Router();
const connection = require("../config/db.config.js");

router.post("/users/new", (req, res) => {
  connection.connect();
  let name = req.body.name;
  let age = req.body.age;
  if(!age || !name) throw new Error('Enter a valid values!')
  connection.query(
    `INSERT INTO users(name, age) VALUES("${name}", ${age})`,
    (error, rows, fields) => {
      if (error) throw new Error(error);
      res.status(200).end("Added");
    }
  );
  connection.end();
});

module.exports = router;
