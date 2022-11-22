import { Link, useParams } from "react-router-dom";
import NoteForm from "./NoteForm";

const AddNote = ({ setNotes }) => {
    const { entryID } = useParams();
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
};

export default AddNote;