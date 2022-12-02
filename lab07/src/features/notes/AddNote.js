import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getEntry } from "../entries/entrySlice";
import NoteForm from "./NoteForm";

const AddNote = () => {
  const { entryID } = useParams();
  const entry = useSelector((state) => getEntry(state, entryID));
  if (entry === undefined) return <p>This entry doesn't exist</p>;
  else
    return (
      <>
        <p>Add note:</p>
        <NoteForm entryID={entryID} noteID={null} />
        <Link to={`/entry/${entryID}`}>
          <button>Back to entry</button>
        </Link>
        <Link to={`/entry/${entryID}/note`}>
          <button>All notes</button>
        </Link>
      </>
    );
};

export default AddNote;
