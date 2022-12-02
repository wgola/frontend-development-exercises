import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllNotesForEntry } from "./noteSlice";
import { Link } from "react-router-dom";

const AllNotes = () => {
  const { entryID } = useParams();

  const notes = useSelector((state) => getAllNotesForEntry(state, entryID));

  const notesList = notes.map((note) => (
    <li key={note.noteID}>
      ID: {note.noteID}, title: {note.title}
      <Link to={`/entry/${entryID}/note/${note.noteID}`}>
        <button>More</button>
      </Link>
      <Link to={`/entry/${entryID}/note/${note.noteID}/update`}>
        <button>Update</button>
      </Link>
      <Link to={`/entry/${entryID}/note/${note.noteID}/delete`}>
        <button>Delete</button>
      </Link>
    </li>
  ));

  return (
    <div>
      <p>All notes:</p>
      <ol>{notesList}</ol>
      <Link to={`/entry/${entryID}/note/add`}>
        <button>Add note</button>
      </Link>
      <Link to={`/entry`}>
        <button>All entries</button>
      </Link>
    </div>
  );
};

export default AllNotes;
