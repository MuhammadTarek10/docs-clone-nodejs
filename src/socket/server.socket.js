import { createServer } from "http";
import { Server } from "socket.io";
import { Document } from "../models/document.model.js";

export default function (app) {
  const server = createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("Client connected");
    socket.on("join", (data) => {
      console.log("Joined");
    });

    socket.on("typing", (data) => {
      socket.broadcast.to(data.documentId).emit("changes", data);
    });

    socket.on("save", async (data) => {
      console.log(data);
      const content = data.delta;
      const document = await Document.findByIdAndUpdate(data.room, { content });
      await document.save();
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  return server;
}
