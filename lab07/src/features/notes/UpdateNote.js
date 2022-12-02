import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import NoteForm from "./NoteForm";
import { getNote } from "./noteSlice";

const UpdateNote = () => {
  const { entryID, noteID } = useParams();

  const note = useSelector((state) => getNote(state, noteID));

  if (note === undefined) return <p>This note doesn't exist</p>;
  else
    return (
      <>
        <p>Update note:</p>
        <NoteForm entryID={entryID} noteID={noteID} />
        <Link to={`/entry/${entryID}`}>
          <button>Back to entry</button>
        </Link>
        <Link to={`/entry/${entryID}/note`}>
          <button>All notes</button>
        </Link>
        <Link to={`/entry/${entryID}/note/${noteID}`}>
          <button>Back to note</button>
        </Link>
      </>
    );
};

export default UpdateNote;
