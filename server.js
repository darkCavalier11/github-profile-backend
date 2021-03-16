const mongoose = require("mongoose");
const PORT = process.env.PORT || 7000;
const express = require("express");
const userRoute = require("./router/userRoute");
const taskRoute = require('./router/taskRoute');
const cors = require('cors');

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(taskRoute);


app.listen(PORT, () => {
  console.log("Server is up " + PORT);
});
