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
      state.allIDs = [];
      action.payload.forEach((planEntry) => {
        const { __v, modificationTime, ...entry } = planEntry;
        const allNotesFetched = state.byID[entry._id]
          ? state.byID[entry._id].allNotesFetched
          : false;
        state.byID[entry._id] = {
          allNotesFetched: allNotesFetched,
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
    deleteNoteFromEntry: (state, action) => {
      const { lessonID, noteID } = action.payload;
      if (state.byID[lessonID])
        state.byID[lessonID].notes = state.byID[lessonID].notes.filter(
          (id) => id !== noteID
        );
    },
    addNoteToEntry: (state, action) => {
      const { lessonID, noteID } = action.payload;
      console.log(lessonID, noteID);
      state.byID[lessonID].notes.push(noteID);
    },
    allNotesFetched: (state, action) => {
      state.byID[action.payload].allNotesFetched = true;
    },
  },
});

export const {
  addFetchedEntries,
  addNewEntry,
  editEntry,
  deleteEntry,
  addNoteToEntry,
  allNotesFetched,
  deleteNoteFromEntry,
} = planEntriesSlice.actions;

export const planEntriesReducer = planEntriesSlice.reducer;

export const getAllPlanEntries = (state) =>
  state.planEntries.allIDs.map((id) => state.planEntries.byID[id]);

export const getPlanEntryByID = (id) => (state) => state.planEntries.byID[id];

export const getIfAllEntriesFetched = (state) =>
  state.planEntries.allEntriesFetched;

export const getIfAllNotesFetched = (entryID) => (state) => {
  if (state.planEntries.byID[entryID])
    return state.planEntries.byID[entryID].allNotesFetched;

  return undefined;
};
