import mongoose, { connect } from "mongoose";

const DATABASE_NAME = process.env.DATABASE_NAME || "docs-development";

const DB_URL = `mongodb+srv://docs:docs@cluster0.vs5gv6z.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;

export default function () {
  connect(DB_URL)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

export const database = mongoose;
