const Tweet = require("../models/Tweet");
const User = require("../models/User");

const newTweet = async (req, res) => {
  // console.log("texto es: " + req.body.text + " de: " + req.user._id);
  const { text } = req.body;

  const tweets = new Tweet({ text, author: req.user });

  await tweets.save();
  res.redirect("/");
};

module.exports = {
  newTweet,
};

/* 
    const { text } = req.body;
    if (text.length > 2 && text.length < 141) {
      const tweet = await Tweet.create({ text, user: req.user });
      res.redirect("/");
    } else {
      res.redirect("/?Sucedio_un_error!!");
    }
  },

  destroy: async function (req, res) {
    try {
      const { id } = req.params;
      await Tweet.remove({ _id: id });
      res.redirect("/");
    } catch (err) {
      res.redirect("/?Sucedio_un_error!!");
    }
  },

  follow: async function (req, res) {
    const { id } = req.params;
    const userToFollow = await User.findById(id);
    console.log(userToFollow);
    for (let i = 0; i < userToFollow.followers.length; i++) {
      if (userToFollow.followers[i].equals(req.user._id)) {
        console.log("Ya estas siguiendo a este usuario");
        await User.updateOne(
          { _id: id },
          {
            $pull: {
              followers: { _id: req.user._id },
            },
          }
        );
      } else {
        await User.updateOne(
          { _id: id },
          { $push: { followers: req.user._id } }
        );
        await User.updateOne(
          { _id: req.user._id },
          { $push: { following: id } }
        );
      }
    }

    res.redirect("back");
  },
};
 */
