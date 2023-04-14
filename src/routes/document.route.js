import express from "express";
import { auth } from "../middleware/auth.middleware.js";
import { Document } from "../models/document.model.js";

const router = express.Router();

router.post("/create", auth, async (req, res) => {
  try {
    const { createdAt } = req.body;
    const document = new Document({
      uid: req.userId,
      title: "Untitled Document",
      createdAt: createdAt,
    });
    await document.save();
    res.status(200).json({ document });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/title", auth, async (req, res) => {
  try {
    const { id, title } = req.body;
    const document = await Document.findByIdAndUpdate(id, { title });
    await document.save();
    res.status(200).json({ document });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/me", auth, async (req, res) => {
  try {
    const documents = await Document.find({ uid: req.userId });
    res.status(200).json({ documents });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    res.status(200).json({ document });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
