const mongoose = require("mongoose");

DB_URL =
  "mongodb+srv://docs:docs@cluster0.vs5gv6z.mongodb.net/?retryWrites=true&w=majority";

module.exports = function () {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.database = mongoose;
