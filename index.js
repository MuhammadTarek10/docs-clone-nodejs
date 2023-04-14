import express from "express";
import startDB from "./src/start/db.js";
import startRoutes from "./src/start/routes.js";
import startSocketServer from "./src/socket/server.socket.js";

startDB();
const app = express();
startRoutes(app);

const PORT = process.env.PORT || 3001;

const server = startSocketServer(app);
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Root");
});
