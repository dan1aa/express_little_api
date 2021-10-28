const express = require("express");
const mainRoute = require("./routes/main.js");
const getUsersRoute = require("./routes/getUsers.js");
const newUserRoute = require("./routes/newUser.js");
const editUserRoute = require("./routes/editUser.js");
const deleteUserRoute = require("./routes/deleteUser.js");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(mainRoute);
app.use(getUsersRoute);
app.use(newUserRoute);
app.use(editUserRoute);
app.use(deleteUserRoute);

async function start() {
  try {
      await mongoose.connect(MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      })

      app.listen(PORT, 
          () => console.log(`server is running on ${PORT}`)
      )
  }

  catch(e) {
      throw new Error(e)
  }
  
}

start()
