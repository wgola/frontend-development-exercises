import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { PlanEntriesList } from "./features/planEntries/PlanEntriesList";
import { AddPlanEntry } from "./features/planEntries/AddPlanEntry";

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
];

export default createBrowserRouter(routes);
