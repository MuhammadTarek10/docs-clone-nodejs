import express from "express";
import cors from "cors";
import auth from "../routes/auth.route.js";

export default function (app) {
  app.use(express.json());
  app.use(cors());
  app.use("/auth", auth);
}
