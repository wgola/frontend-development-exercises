import { useParams, Link } from "react-router-dom";
import EntryForm from "./EntryForm";

const UpdateEntry = ({ entries, setEntries }) => {
    const params = useParams();
    const { entryID, ...initialValues } = entries.filter(entry => entry.entryID === params.entryID)[0];
    return (
        <>
            <p>Update entry: </p>
            <EntryForm initialValues={initialValues} setEntries={setEntries} entryID={params.entryID} />
            <Link to="/entry"><button>All entries</button></Link>
            <Link to="/"><button>Home</button></Link>
            <Link to={`/entry/${entryID}`}><button>Back to entry</button></Link>
        </>
    )
};

export default UpdateEntry;