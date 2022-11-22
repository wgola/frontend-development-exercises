import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DeleteEntry = ({ setEntries }) => {
    const { entryID } = useParams();
    // eslint-disable-next-line
    useEffect(() => setEntries(entries => [ ...entries.filter(entry => entry.entryID !== entryID) ]), []);
    return (<div>
                <p>Entry {entryID} deleted.</p>
                <Link to="/entry"><button>All entries</button></Link>
                <Link to="/"><button>Home</button></Link>
            </div>)
};

export default DeleteEntry;