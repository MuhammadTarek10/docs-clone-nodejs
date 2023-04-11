const express = require("express");
const auth = require("../routes/auth.route");

module.exports = function (app) {
  app.use(express.json());
  app.use("/auth", auth);
};
