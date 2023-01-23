import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { PlanEntriesList } from "./features/planEntries/PlanEntriesList";
import { AddPlanEntry } from "./features/planEntries/AddPlanEntry";
import { EditPlanEntry } from "./features/planEntries/EditPlanEntry";

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
];

export default createBrowserRouter(routes);
