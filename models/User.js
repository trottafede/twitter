const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  description: String,
  profilePicture: String,
  //tweets: {username: String, comment: String },
  //following: {username: String},
  //followers: {username: String},
});

module.exports = mongoose.model("user", userSchema);
