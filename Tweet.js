const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Tweet = new Schema({
  text: String(140),
  username: String,
  createdAt: Date,
  likes: Number,
});

module.exports = mongoose.model("tweets", Tweet);