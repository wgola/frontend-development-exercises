import { configureStore } from "@reduxjs/toolkit";
import entriesReducer from "../features/entries/entrySlice";

export default configureStore({
  reducer: {
    entries: entriesReducer,
  },
});
