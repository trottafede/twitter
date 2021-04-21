const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tweet = new Schema({
  text: String(140),
  autor: String,
  createdAt: { type: Date, default: Date.now },
  likes: Number,
});

// time stamp? consultar createdAt

module.exports = mongoose.model("tweets", Tweet);