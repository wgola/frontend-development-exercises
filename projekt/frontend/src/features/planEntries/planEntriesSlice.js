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
    addFetchedEntries: {
      reducer: (state, action) => {
        action.payload.forEach((planEntry) => {
          if (!state.byID[planEntry._id])
            state.byID[planEntry._id] = {
              allNotesFetched: false,
              ...planEntry,
            };

          if (!state.allIDs.includes(planEntry._id))
            state.allIDs.push(planEntry._id);
        });

        state.allEntriesFetched = true;
      },
      prepare: (fetchedEntries) => {
        const preparedEntries = fetchedEntries.map((planEntry) => {
          const { __v, modificationTime, ...entry } = planEntry;

          return {
            ...entry,
            modificationTime: new Date(modificationTime).toUTCString(),
          };
        });

        return { payload: preparedEntries };
      },
    },
    addNewEntry: {
      reducer: (state, action) => {
        state.byID[action.payload._id] = action.payload;
        state.allIDs.push(action.payload._id);
      },
      prepare: (planEntry) => {
        const { __v, modificationTime, ...entry } = planEntry;

        return {
          payload: {
            allNotesFetched: false,
            ...entry,
            modificationTime: new Date(modificationTime).toUTCString(),
          },
        };
      },
    },
    editEntry: {
      reducer: (state, action) => {
        state.byID[action.payload._id] = lodash.merge(
          state.byID[action.payload._id],
          action.payload
        );
      },
      prepare: (editedEntry) => {
        const { __v, ...entry } = editedEntry;

        return { payload: { ...entry } };
      },
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
