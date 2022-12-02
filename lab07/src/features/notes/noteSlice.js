import { createSlice } from "@reduxjs/toolkit";
import shortUUID from "short-uuid";

export const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(entryID, note) {
        return {
          payload: {
            noteID: shortUUID().new(),
            entryID: entryID,
            ...note,
          },
        };
      },
    },
    updateNote: {
      reducer(state, action) {
        return state.map((note) =>
          note.noteID === action.payload.noteID ? action.payload : note
        );
      },
      prepare(noteID, entryID, note) {
        return {
          payload: {
            noteID: noteID,
            entryID: entryID,
            ...note,
          },
        };
      },
    },
    deleteNote: (state, action) =>
      state.filter((note) => note.noteID !== action.payload),
  },
});

export const { addNote, updateNote, deleteNote } = noteSlice.actions;

export const getAllNotesForEntry = (state, entryID) =>
  state.notes.filter((note) => note.entryID === entryID);

export const getNote = (state, noteID) =>
  state.notes.filter((note) => note.noteID === noteID);

export default noteSlice.reducer;
