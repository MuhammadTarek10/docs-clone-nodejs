import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DATABASE_NAME = process.env.DATABASE_NAME || "docs-development";

const MONGO_NAME = process.env.MONGO_NAME;
const MONGO_SECRET = process.env.MONGO_SECRET;

const DB_URL = `mongodb+srv://${MONGO_NAME}:${MONGO_SECRET}@cluster0.vs5gv6z.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;

export default function () {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

export const database = mongoose;
