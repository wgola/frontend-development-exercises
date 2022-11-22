import { Link } from "react-router-dom";
import EntryForm from "./EntryForm";

const AddEntry = ({ setEntries }) => {
    const initialValues = {
        name: "",
        teacher: "",
        day: "",
        time: ""
    };
    return (
        <>
            <p>Add entry: </p>
            <EntryForm initialValues={initialValues} setEntries={setEntries} entryID={null} />
            <Link to="/entry"><button>All entries</button></Link>
            <Link to="/"><button>Home</button></Link>
        </>
    )
};

export default AddEntry;