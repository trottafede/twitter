const Tweet = require("../models/Tweet");
const User = require("../models/User");

const showHome = async (req, res) => {
  // console.log("Logeado como: " + req.user);
  const user = req.user;

  const tweets = await Tweet.find()
    .populate("user")
    .limit(20)
    .sort({ createdAt: "desc" });

  // console.log(tweets);
  let arrayDeTweet = [];


  let count = 0;

  await new Promise((resolve) => {
    tweets.forEach(async (item) => {
      try {
        //some real logic
        let newUser = await User.findById(item.author);

        arrayDeTweet.push({
          _id: item._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          image: newUser.image,
          tweet: item.text,
          tweetDate: item.createdAt,
          likes: item.likes.length,
        });
      } catch (e) {
        // error handling
        console.log(e);
      } finally {
        // most important is here
        count += 1;
        if (count == tweets.length) {
          // console.log(arrayDeTweet);
          resolve();
          res.render("home", { arrayDeTweet, user });
        }
      }

    });
  });

  // setTimeout(() => {
  // console.log(arrayDeTweet);
  //
  // }, 10000);
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
