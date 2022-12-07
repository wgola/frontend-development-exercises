import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteNote } from "./noteSlice";

const DeleteNote = ({ setNotes }) => {
  const { entryID, noteID } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {dispatch(deleteNote(noteID))});
  return (
    <div>
      <p>Note {noteID} deleted.</p>
      <Link to={`/entry/${entryID}`}>
        <button>Back to entry</button>
      </Link>
      <Link to={`/entry`}>
        <button>All entries</button>
      </Link>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default DeleteNote;
