import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getEntry } from "./entrySlice";

const SingleEntry = () => {
  const { entryID } = useParams();
  const entry = useSelector((state) => getEntry(state, entryID));

  if (entry === undefined) return <p>This entry doesn't exist</p>;
  else {
    const result = (
      <div>
        <p>Entry {entry.entryID}</p>
        <ul>
          <li>ID: {entry.entryID}</li>
          <li>Subject: {entry.subject}</li>
          <li>Teacher: {entry.teacher}</li>
          <li>Day: {entry.day}</li>
          <li>Time: {entry.time}</li>
        </ul>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to={`/entry/${entryID}/update`}>
          <button>Update</button>
        </Link>
        <Link to={`/entry/${entryID}/delete`}>
          <button>Delete</button>
        </Link>
      </div>
    );
    return result;
  }
};

export default SingleEntry;
