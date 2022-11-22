import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DeleteNote = ({ setNotes }) => {
    const { entryID, noteID } = useParams();
    // eslint-disable-next-line
    useEffect(() => setNotes(notes => [ ...notes.filter(note => note.noteID !== noteID) ]), []);
    return (
        <div>
            <p>Note {noteID} deleted.</p>
            <Link to={`/entry/${entryID}`}><button>Back to entry</button></Link>
            <Link to={`/entry`}><button>All entries</button></Link>
            <Link to={`/`}><button>Home</button></Link>
        </div>)
};

export default DeleteNote;