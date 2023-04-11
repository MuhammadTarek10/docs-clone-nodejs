const express = require("express");
const app = express();
require("./src/start/db")();
require("./src/start/routes")(app);

PORT = process.env.PORT | 3001;

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Root");
});

module.exports = server;
