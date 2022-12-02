import { createSlice } from "@reduxjs/toolkit";
import shortUUID from "short-uuid";

export const entrySlice = createSlice({
  name: "entries",
  initialState: [],
  reducers: {
    addEntry: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(entry) {
        return {
          payload: {
            entryID: shortUUID().new(),
            ...entry,
          },
        };
      },
    },
    updateEntry: {
      reducer(state, action) {
        return state.map((entry) =>
          entry.entryID === action.payload.entryID ? action.payload : entry
        );
      },
      prepare(entryID, entry) {
        return {
          payload: {
            entryID: entryID,
            ...entry,
          },
        };
      },
    },
    deleteEntry: (state, action) =>
      state.filter((entry) => entry.entryID !== action.payload),
  },
});

export const { addEntry, updateEntry, deleteEntry } = entrySlice.actions;

export const getAllEntries = (state) => state.entries;

export const getEntry = (state, entryID) =>
  state.entries.find((entry) => entry.entryID === entryID);

export default entrySlice.reducer;
