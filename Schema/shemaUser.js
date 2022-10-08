const mongoose = require("mongoose");

const Shema = mongoose.Schema;

const user = new Shema({
  name: {
    type: String,
    required:false
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: null,
  },
});

const UserModel = mongoose.model("user", user);

module.exports = UserModel;
