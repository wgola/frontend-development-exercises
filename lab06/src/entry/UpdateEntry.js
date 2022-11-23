import { useParams, Link } from "react-router-dom";
import ErrorPage from "../main/ErrorPage";
import EntryForm from "./EntryForm";

const UpdateEntry = ({ entries, setEntries }) => {
    const params = useParams();
    const foundEntry = entries.filter(entry => entry.entryID === params.entryID)[0];
    if (foundEntry === undefined) {
        const error = `Entry with ID ${params.entryID} not found.`;
        return <ErrorPage error={error} />
    } else {
        const { entryID, ...initialValues } = foundEntry;
        return (
            <>
                <p>Update entry: </p>
                <EntryForm initialValues={initialValues} setEntries={setEntries} entryID={params.entryID} />
                <Link to="/entry"><button>All entries</button></Link>
                <Link to="/"><button>Home</button></Link>
                <Link to={`/entry/${entryID}`}><button>Back to entry</button></Link>
            </>
        )
    }
};

export default UpdateEntry;