import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.js"

const routes = [
    {
      path: "/entry/:entryID/note/:noteID/delete",
      element: <p>DeleteNote</p>,
    },
    {
      path: "/entry/:entryID/note/:noteID/update",
      element: <p>UpdateNote</p>,
    },
    {
      path: "/entry/:entryID/note/:noteID",
      element: <p>SingleNote</p>,
    },
    {
      path: "/entry/:entryID/note/add",
      element: <p>AddNote</p>,
    },
    {
      path: "/entry/:entryID/note",
      element: <p>AllNotes</p>,
    },
    {
      path: "/entry/:entryID/delete",
      element: <p>DeleteEntry</p>,
    },
    {
      path: "/entry/:entryID/update",
      element: <p>UpdateEntry</p>,
    },
    {
      path: "/entry/:entryID",
      element: <p>SingleEntry</p>,
      children: [
        {
          path: "/entry/:entryID",
          element: <p>AllNotes</p>
        }
      ]
    },
    {
      path: "/entry/add",
      element: <p>AddEntry</p>,
    },
    {
      path: "/entry",
      element: <p>AllEntries</p>,
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