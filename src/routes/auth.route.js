const express = require("express");
const { User } = require("../models/user.model");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, photoUrl } = req.body;

  try {
    let user = User.findOne({ email: email });
    if (!user) {
      user = new User(name, email, photoUrl);
      user = await user.save();
    }
    res.status(200).json({ user });
  } catch (e) {
    print(e);
  }
});

module.exports = router;
