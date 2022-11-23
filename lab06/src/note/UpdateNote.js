import { Link, useParams } from "react-router-dom";
import ErrorPage from "../main/ErrorPage";
import NoteForm from "./NoteForm";

const UpdateNote = ({ entries, notes, setNotes }) => {
    const params = useParams();
    if (entries.filter(entry => entry.entryID === params.entryID).length === 0) {
        const error = `Entry with ID: ${params.entryID} not found.`;
        return <ErrorPage error={error} /> 
    } else {
        const foundNote = notes.filter(note => note.noteID === params.noteID)[0];
        if (foundNote === undefined) {
            const error = `Note with ID: ${params.noteID} not found.`
            return <ErrorPage error={error} />
        } else {
            const { entryID, noteID, ...initialValues } = foundNote;
            return (
                <>
                    <p>Update note:</p>
                    <NoteForm initialValues={initialValues} entryID={params.entryID} setNotes={setNotes} noteID={params.noteID} />
                    <Link to={`/entry/${entryID}`}><button>Back to entry</button></Link>
                    <Link to={`/entry/${entryID}/note`}><button>All notes</button></Link>
                    <Link to={`/entry/${entryID}/note/${noteID}`}><button>Back to note</button></Link>
                </>
            )
        }
    }
};

export default UpdateNote;