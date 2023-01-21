import { Router } from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteByID,
  updateNote,
} from "../controllers/note.controller.js";

const noteRouter = Router();

noteRouter.get("/:lessonID/note", getAllNotes);

noteRouter.post("/:lessonID/note", createNote);

noteRouter.get("/:lessonID/note/:noteID", getNoteByID);

noteRouter.put("/:lessonID/note/:noteID", updateNote);

noteRouter.delete("/:lessonID/note/:noteID", deleteNote);

export default noteRouter;
