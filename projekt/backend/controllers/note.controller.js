import { planEntry } from "../models/planEntry.model.js";
import { note } from "../models/note.model.js";

export const getAllNotes = async (req, res) => {
  try {
    const { lessonID } = req.params;
    const notesIDs = await planEntry.findById(lessonID, { _id: 0, notes: 1 });
    const notes = await note.find({ _id: { $in: notesIDs } });

    return res.status(200).json(notes);
  } catch {
    return res.status(500).json({ message: "Couldn't get any notes" });
  }
};

export const getNoteByID = async (req, res) => {
  try {
    const { noteID } = req.params;
    const foundNote = await note.findById(noteID);

    return res.status(200).json(foundNote);
  } catch {
    return res.status(500).json({
      message: `Couldn't get note with ID: ${req.params.noteID}`,
    });
  }
};

export const createNote = async (req, res) => {
  try {
    const { lessonID } = req.params;
    const { noteID, ...rest } = req.body;
    const createdNote = await note.create({ _id: noteID, ...rest });
    await planEntry.findByIdAndUpdate(lessonID, { $push: { notes: noteID } });

    return res.status(201).json(createdNote);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't create note" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { noteID } = req.params;
    const data = req.body;
    await note.findByIdAndUpdate(noteID, data);

    return res.status(200).json({ message: "Note updated" });
  } catch {
    return res.status(500).json({ message: "Couldn't update note" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { noteID, lessonID } = req.params;
    await note.findByIdAndDelete(noteID);
    await planEntry.findByIdAndUpdate(lessonID, { $pull: { notes: noteID } });

    return res.status(200).json({ message: "Succesfully deleted note" });
  } catch {
    return res.status(500).json({ message: "Couldn't delete plan entry" });
  }
};
