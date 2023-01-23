import { createSlice } from "@reduxjs/toolkit";
import lodash from "lodash";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    byID: {},
    allIDs: [],
  },
  reducers: {
    addFetchedNotes: (state, action) => {
      state.byID = {};
      state.allIDs = [];
      action.payload.forEach((planNote) => {
        const { __v, modificationTime, ...note } = planNote;
        state.byID[note._id] = {
          modificationTime: new Date(modificationTime).toUTCString(),
          ...note,
        };
        state.allIDs.push(note._id);
      });
    },
    addNewNote: (state, action) => {
      const { __v, modificationTime, ...note } = action.payload;
      state.byID[note._id] = {
        modificationTime: new Date(modificationTime).toUTCString(),
        ...note,
      };
      state.allIDs.push(note._id);
    },
    editNote: (state, action) => {
      const { __v, ...note } = action.payload;
      state.byID[note._id] = lodash.merge(state.byID[note._id], note);
    },
    deleteNote: (state, action) => {
      const _id = action.payload;
      delete state.byID[_id];
      state.allIDs = state.allIDs.filter((id) => id !== _id);
    },
  },
});

export const { addFetchedNotes, addNewNote, editNote, deleteNote } =
  notesSlice.actions;

export const notesReducer = notesSlice.reducer;

export const getNoteByID = (noteID) => (state) => state.notes.byID[noteID];
