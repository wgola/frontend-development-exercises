import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { PlanEntriesList } from "./features/planEntries/PlanEntriesList";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/planEntry",
    element: <PlanEntriesList />,
  },
];

export default createBrowserRouter(routes);
