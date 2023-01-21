import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  entryID: { type: String, required: true },
  importance: { type: Number, required: true },
  creationTime: { type: Date, required: true },
  image: { type: String, required: true },
});

export const note = mongoose.model("note", noteSchema, "notes");
