import { createSlice } from "@reduxjs/toolkit";
import lodash from "lodash";

export const planEntriesSlice = createSlice({
  name: "planEntries",
  initialState: {
    byID: {},
    allIDs: [],
    allEntriesFetched: false,
  },
  reducers: {
    addFetchedEntries: (state, action) => {
      state.byID = {};
      state.allIDs = [];
      action.payload.forEach((planEntry) => {
        const { __v, modificationTime, ...entry } = planEntry;
        state.byID[entry._id] = {
          allNotesFetched: false,
          modificationTime: new Date(modificationTime).toUTCString(),
          ...entry,
        };
        state.allIDs.push(planEntry._id);
      });
      state.allEntriesFetched = true;
    },
    addNewEntry: (state, action) => {
      const { __v, modificationTime, ...entry } = action.payload;
      state.byID[entry._id] = {
        allNotesFetched: false,
        modificationTime: new Date(modificationTime).toUTCString(),
        ...entry,
      };
      state.allIDs.push(entry._id);
    },
    editEntry: (state, action) => {
      const { __v, ...entry } = action.payload;
      state.byID[entry._id] = lodash.merge(state.byID[entry._id], entry);
    },
    deleteEntry: (state, action) => {
      const _id = action.payload;
      delete state.byID[_id];
      state.allIDs = state.allIDs.filter((id) => id !== _id);
    },
  },
});

export const { addFetchedEntries, addNewEntry, editEntry, deleteEntry } =
  planEntriesSlice.actions;

export const planEntriesReducer = planEntriesSlice.reducer;

export const getAllPlanEntries = (state) =>
  state.planEntries.allIDs.map((id) => state.planEntries.byID[id]);

export const getPlanEntryByID = (id) => (state) => state.planEntries.byID[id];

export const getIfAllEntriesFetched = (state) =>
  state.planEntries.allEntriesFetched;
