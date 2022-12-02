import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import EntryForm from "./EntryForm";
import { getEntry } from "./entrySlice";

const UpdateEntry = () => {
  const { entryID } = useParams();
  const entry = useSelector((state) => getEntry(state, entryID));
  if (entry === undefined) return <p>This entry doesn't exist</p>;
  else {
    return (
      <>
        <p>Update entry: </p>
        <EntryForm entryID={entryID} />
        <Link to="/entry">
          <button>All entries</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to={`/entry/${entryID}`}>
          <button>Back to entry</button>
        </Link>
      </>
    );
  }
};

export default UpdateEntry;
