const Tweet = require("../models/Tweet");
const User = require("../models/User");

const showHome = async (req, res) => {
  // console.log("Logeado como: " + req.user);
  const user = req.user;

  const tweets = await Tweet.find()
    .populate("user")
    .limit(20)
    .sort({ createdAt: "desc" });

  let arrayDeTweet = [];

  tweets.forEach(async (item) => {
    let newUser = await User.findById(item.author);

    arrayDeTweet.push({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      image: newUser.image,
      tweet: item.text,
      tweetDate: item.createdAt,
    });
  });

  setTimeout(() => {
    // console.log(arrayDeTweet);
    res.render("home", { arrayDeTweet, user });
  }, 1000);
};

const logout = async (req, res) => {
  req.logout();
  res.redirect("/");
};

const userHome = async (req, res) => {
  console.log("Logeado como: " + req.user);
  const user = req.user;

  const tweets = await Tweet.find({ author: req.user._id })
    .populate("user")
    .limit(20)
    .sort({ createdAt: "desc" });
  // console.log(tweets);
  res.render("userHome", { tweets, user });
};

module.exports = {
  logout,
  userHome,
  showHome,
};
