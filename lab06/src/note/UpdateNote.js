import { Link, useParams } from "react-router-dom";
import NoteForm from "./NoteForm";

const UpdateNote = ({ notes, setNotes }) => {
    const params = useParams();
    const { entryID, noteID, ...initialValues } = notes.filter(note => note.noteID === params.noteID)[0];
    return (
        <>
            <p>Update note:</p>
            <NoteForm initialValues={initialValues} entryID={params.entryID} setNotes={setNotes} noteID={params.noteID} />
            <Link to={`/entry/${entryID}`}><button>Back to entry</button></Link>
            <Link to={`/entry/${entryID}/note`}><button>All notes</button></Link>
            <Link to={`/entry/${entryID}/note/${noteID}`}><button>Back to note</button></Link>
        </>
    )
};

export default UpdateNote;