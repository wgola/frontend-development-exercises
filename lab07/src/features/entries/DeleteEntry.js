import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteEntry } from "./entrySlice";

const DeleteEntry = () => {
  const { entryID } = useParams();
  const dispatch = useDispatch();
  dispatch(deleteEntry(entryID));
  return (
    <div>
      <p>Entry {entryID} deleted.</p>
      <Link to="/entry">
        <button>All entries</button>
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default DeleteEntry;
