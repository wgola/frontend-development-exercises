import { Link } from "react-router-dom";
import EntryForm from "./EntryForm";

const AddEntry = () => {
  return (
    <>
      <p>Add entry: </p>
      <EntryForm entryID={null} />
      <Link to="/entry">
        <button>All entries</button>
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
};

export default AddEntry;
