import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { name, email, photoUrl } = req.body;

  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      user = new User({ name, email, photoUrl });
      user = await user.save();
    }
    const token = jwt.sign({ id: user._id }, "docs");

    res.status(200).json({ user, token });
  } catch (e) {
    console.log(`Error: ${e}`);
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.status(200).json({ user, token: user.token });
  } catch (e) {
    console.log(`Error: ${e}`);
  }
});

export default router;
