const express = require("express");
const mainRoute = require("./routes/main.js");
const getUsersRoute = require("./routes/getUsers.js");
const newUserRoute = require("./routes/newUser.js");
const editUserRoute = require("./routes/editUser.js");
const deleteUserRoute = require("./routes/deleteUser.js");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(mainRoute);
app.use(getUsersRoute);
app.use(newUserRoute);
app.use(editUserRoute);
app.use(deleteUserRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log("server is on: 3000");
});
