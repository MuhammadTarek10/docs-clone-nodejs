const express = require("express");
const cors = require("cors");
const auth = require("../routes/auth.route");

module.exports = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use("/auth", auth);
};
