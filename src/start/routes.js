import express from "express";
import cors from "cors";
import auth from "../routes/auth.route.js";
import document from "../routes/document.route.js";

export default function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/auth", auth);
  app.use("/docs", document);
}
