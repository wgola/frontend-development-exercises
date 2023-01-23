import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { planEntriesReducer } from "../features/planEntries/planEntriesSlice.js";
import { notesReducer } from "../features/notes/notesSlice.js";

export default configureStore({
  reducer: {
    planEntries: planEntriesReducer,
    notes: notesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
