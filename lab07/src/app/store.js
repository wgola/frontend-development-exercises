import { configureStore } from "@reduxjs/toolkit";
import entriesReducer from "../features/entries/entrySlice";
import noteReducer from "../features/notes/noteSlice";

export default configureStore({
  reducer: {
    entries: entriesReducer,
    notes: noteReducer,
  },
});
