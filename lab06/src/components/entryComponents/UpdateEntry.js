import { useParams } from "react-router-dom";
import EntryForm from "./EntryForm";

const UpdateEntry = ({ entries, setEntries }) => {
    const { entryID } = useParams();
    const { id, ...initialValues } = entries[entryID];
    return (
        <>
            <p>Edit entry ${entryID}: </p>
            <EntryForm initialValues={initialValues} entryID={id} setEntries={setEntries} />
        </>)
};

export default UpdateEntry;