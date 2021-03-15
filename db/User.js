const mongoose = require("mongoose");
const url = "mongodb+srv://mongodb:mongodb11@cluster0.kf1om.mongodb.net/user?retryWrites=true&w=majority";
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
  savedProfiles: {
      type:Array,
      default: []
  }
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
