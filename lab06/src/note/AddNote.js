import { Link, useParams } from "react-router-dom";
import ErrorPage from "../main/ErrorPage";
import NoteForm from "./NoteForm";

const AddNote = ({ entries, setNotes }) => {
    const { entryID } = useParams();
    if (entries.filter(entry => entry.entryID === entryID).length === 0) {
        const error = `Entry with ID: ${entryID} not found`;
        return <ErrorPage error={error} />
    } else {
        const initialValues = {
            title: "",
            content: ""
        }
        return (
            <>
                <p>Add note:</p>
                <NoteForm initialValues={initialValues} entryID={entryID} setNotes={setNotes} noteID={null} />
                <Link to={`/entry/${entryID}`}><button>Back to entry</button></Link>
                <Link to={`/entry/${entryID}/note`}><button>All notes</button></Link>
            </>
        )
    }
};

export default AddNote;