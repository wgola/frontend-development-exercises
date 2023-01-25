import { createSlice } from "@reduxjs/toolkit";
import lodash from "lodash";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    byID: {},
    allIDs: [],
  },
  reducers: {
    addFetchedNotes: {
      reducer: (state, action) => {
        action.payload.forEach((planNote) => {
          if (!state.byID[planNote._id]) state.byID[planNote._id] = planNote;

          if (!state.allIDs.includes(planNote._id))
            state.allIDs.push(planNote._id);
        });
      },
      prepare: (fetchedNotes) => {
        const preparedNotes = fetchedNotes.map((planNote) => {
          const { __v, modificationTime, ...note } = planNote;

          return {
            ...note,
            modificationTime: new Date(modificationTime).toUTCString(),
          };
        });

        return { payload: preparedNotes };
      },
    },
    addNewNote: {
      reducer: (state, action) => {
        state.byID[action.payload._id] = action.payload;
        state.allIDs.push(action.payload._id);
      },
      prepare: (planNote) => {
        const { __v, modificationTime, ...note } = planNote;

        return {
          payload: {
            ...note,
            modificationTime: new Date(modificationTime).toUTCString(),
          },
        };
      },
    },
    editNote: {
      reducer: (state, action) => {
        state.byID[action.payload._id] = lodash.merge(
          state.byID[action.payload._id],
          action.payload
        );
      },
      prepare: (editedNote) => {
        const { __v, ...note } = editedNote;

        return { payload: { ...note } };
      },
    },
    deleteNote: (state, action) => {
      const _id = action.payload;
      delete state.byID[_id];
      state.allIDs = state.allIDs.filter((id) => id !== _id);
    },
    deleteNotesByIDs: (state, action) => {
      const ids = action.payload;
      ids.forEach((id) => delete state.byID[id]);
      state.allIDs = state.allIDs.filter((id) => !ids.includes(id));
    },
  },
});

export const {
  addFetchedNotes,
  addNewNote,
  editNote,
  deleteNote,
  deleteNotesByIDs,
} = notesSlice.actions;

export const notesReducer = notesSlice.reducer;

export const getNoteByID = (noteID) => (state) => state.notes.byID[noteID];

export const getAllNotesOfEntry = (entryID) => (state) => {
  if (state.planEntries.byID[entryID])
    return state.planEntries.byID[entryID].notes.map(
      (noteID) => state.notes.byID[noteID]
    );

  return undefined;
};
