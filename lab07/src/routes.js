import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import AddEntry from "./features/entries/AddEntry";
import SingleEntry from "./features/entries/SingleEntry";
import AllEntries from "./features/entries/AllEntries";
import UpdateEntry from "./features/entries/UpdateEntry";
import DeleteEntry from "./features/entries/DeleteEntry";
import SingleNote from "./features/notes/SingleNote";
import AllNotes from "./features/notes/AllNotes";
import AddNote from "./features/notes/AddNote";
import UpdateNote from "./features/notes/UpdateNote";
import DeleteNote from "./features/notes/DeleteNote";

const routes = [
  {
    path: "/entry/:entryID/note/:noteID/delete",
    element: <DeleteNote />,
  },
  {
    path: "/entry/:entryID/note/:noteID/update",
    element: <UpdateNote />,
  },
  {
    path: "/entry/:entryID/note/:noteID",
    element: <SingleNote />,
  },
  {
    path: "/entry/:entryID/note/add",
    element: <AddNote />,
  },
  {
    path: "/entry/:entryID/note",
    element: <AllNotes />,
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
