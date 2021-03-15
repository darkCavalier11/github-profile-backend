const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const express = require("express");
const userRoute = require("./router/userRoute");

const app = express();

app.use(express.json());
app.use(userRoute);

app.listen(PORT, () => {
  console.log("Server is up " + PORT);
});
