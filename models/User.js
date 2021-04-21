const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
  // description: String,
  // profilePicture: String,

  //tweets: {username: String, comment: String },
  //following: {username: String},
  //followers: {username: String},
});

module.exports = mongoose.model("user", userSchema);
