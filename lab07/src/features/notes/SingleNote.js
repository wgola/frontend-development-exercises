import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getNote } from "./noteSlice";

const SingleNote = () => {
  const { entryID, noteID } = useParams();

  const note = useSelector((state) => getNote(state, noteID));

  if (note === undefined) return <p>This note doesn't exist</p>;
  else {
    return (
      <div>
        <p>Note {note.noteID}</p>
        <ul>
          <li>ID: {note.noteID}</li>
          <li>Title: {note.title}</li>
          <li>Content: {note.content}</li>
        </ul>
        <Link to={`/entry/${entryID}`}>
          <button>Back to entry</button>
        </Link>
        <Link to={`/entry/${entryID}/note`}>
          <button>All notes</button>
        </Link>
        <Link to={`/entry/${entryID}/note/${noteID}/update`}>
          <button>Update</button>
        </Link>
        <Link to={`/entry/${entryID}/note/${noteID}/delete`}>
          <button>Delete</button>
        </Link>
      </div>
    );
  }
};

export default SingleNote;
