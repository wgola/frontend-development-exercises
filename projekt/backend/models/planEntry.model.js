import mongoose from "mongoose";

const planEntrySchema = mongoose.Schema({
  _id: { type: String, required: true },
  subject: { type: String, required: true },
  teacher: { type: String, required: true },
  day: { type: String, required: true },
  time: { type: String, required: true },
  difficulty: { type: Number, required: true },
  creationTime: { type: Date, required: true },
  image: { type: String, required: true },
});

export const planEntry = mongoose.model(
  "planEntry",
  planEntrySchema,
  "planEntries"
);
