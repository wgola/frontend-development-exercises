import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { planEntriesReducer } from "../features/planEntries/planEntriesSlice.js";

export default configureStore({
  reducer: {
    planEntries: planEntriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
