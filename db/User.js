const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/userData";
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  first_name: {
    required: true,
    type: String,
    minlength: 3,
  },
  last_name: {
    type: String,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
