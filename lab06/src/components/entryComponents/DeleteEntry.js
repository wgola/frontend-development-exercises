import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const DeleteEntry = ({ setEntries }) => {
    const { entryID } = useParams();
    useEffect(() => 
        setEntries(entries => {
            delete entries[entryID];
            return {...entries};
        }));
    return (
        <>
            <p>Entry ${entryID} deleted.</p>
            <Link to="/"><button>Home</button></Link>
            <Link to="/entry"><button>All entries</button></Link>
        </>)
};

export default DeleteEntry;