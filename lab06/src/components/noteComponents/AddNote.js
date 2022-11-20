import { useParams } from "react-router-dom";
import NoteForm from "./NoteForm";

const AddNote = ({ setNotes, setEntries }) => {
    const { entryID } = useParams();
    const initialValues = {
        title: "",
        content: ""
    }
    return <NoteForm initialValues={initialValues} setNotes={setNotes} entryID={entryID} setEntries={setEntries} noteID={null} />
};

export default AddNote;