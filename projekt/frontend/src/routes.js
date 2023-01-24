import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { PlanEntriesList } from "./features/planEntries/PlanEntriesList";
import { AddPlanEntry } from "./features/planEntries/AddPlanEntry";
import { EditPlanEntry } from "./features/planEntries/EditPlanEntry";
import { DetailPlanEntry } from "./features/planEntries/DetailPlanEntry";
import { AddNote } from "./features/notes/AddNote";
import { NotesList } from "./features/notes/NotesList";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/planEntry",
    element: <PlanEntriesList />,
  },
  {
    path: "/planEntry/add",
    element: <AddPlanEntry />,
  },
  {
    path: "/planEntry/:lessonID/edit",
    element: <EditPlanEntry />,
  },
  {
    path: "/planEntry/:lessonID",
    element: <DetailPlanEntry />,
    children: [
      {
        path: "/planEntry/:lessonID/note",
        element: <NotesList />,
      },
    ],
  },
  {
    path: "/planEntry/:lessonID/note/add",
    element: <AddNote />,
  },
];

export default createBrowserRouter(routes);
