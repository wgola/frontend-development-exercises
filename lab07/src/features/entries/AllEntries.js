import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllEntries } from "./entrySlice";

const AllEntries = () => {
  const entries = useSelector(getAllEntries);

  const entriesList = entries.map((entry) => (
    <li key={entry.entryID}>
      ID: {entry.entryID}, subject: {entry.subject}
      <Link to={`/entry/${entry.entryID}`}>
        <button>More...</button>
      </Link>
      <Link to={`/entry/${entry.entryID}/update`}>
        <button>Update</button>
      </Link>
      <Link to={`/entry/${entry.entryID}/delete`}>
        <button>Delete</button>
      </Link>
      <Link to={`/entry/${entry.entryID}/note`}>
        <button>Notes</button>
      </Link>
      <Link to={`/entry/${entry.entryID}/note/add`}>
        <button>Add note</button>
      </Link>
    </li>
  ));
  return (
    <div>
      <p>All entries:</p>
      <ol>{entriesList}</ol>
      <Link to="/entry/add">
        <button>Add entry</button>
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default AllEntries;
