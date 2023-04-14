import mongoose from "mongoose";

const documentSchema = mongoose.Schema({
  uid: {
    required: true,
    type: String,
  },
  createdAt: {
    required: true,
    type: Number,
  },
  title: {
    required: true,
    type: String,
  },
  content: {
    type: Array,
    default: [],
  },
});

export const Document = mongoose.model("Document", documentSchema);
