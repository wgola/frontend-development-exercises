import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import AddEntry from "./features/entries/AddEntry";
import SingleEntry from "./features/entries/SingleEntry";
import AllEntries from "./features/entries/AllEntries";
import UpdateEntry from "./features/entries/UpdateEntry";
import DeleteEntry from "./features/entries/DeleteEntry";

const routes = [
  {
    path: "/entry/:entryID/note/:noteID/delete",
    element: <p>Delete notes</p>,
  },
  {
    path: "/entry/:entryID/note/:noteID/update",
    element: <p>Update note</p>,
  },
  {
    path: "/entry/:entryID/note/:noteID",
    element: <p>Get note</p>,
  },
  {
    path: "/entry/:entryID/note/add",
    element: <p>Add note</p>,
  },
  {
    path: "/entry/:entryID/note",
    element: <p>Get note</p>,
  },
  {
    path: "/entry/:entryID/delete",
    element: <DeleteEntry />,
  },
  {
    path: "/entry/:entryID/update",
    element: <UpdateEntry />,
  },
  {
    path: "/entry/:entryID",
    element: <SingleEntry />,
  },
  {
    path: "/entry/add",
    element: <AddEntry />,
  },
  {
    path: "/entry",
    element: <AllEntries />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <p>Wrong path</p>,
  },
];

export default createBrowserRouter(routes);
