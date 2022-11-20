import { Link, useParams } from "react-router-dom";
import GetAllNotes from "../noteComponents/GetAllNotes";

const GetEntry = ({ entries, notes }) => {
    const { entryID } = useParams();
    const entry = entries[entryID];
    return (
        <div>
            <p>Entry info:</p>
            <ul>
                <li>ID: {entry.id}</li>
                <li>name: {entry.name}</li>
                <li>teacher: {entry.teacher}</li>
                <li>day: {entry.day}</li>
                <li>time: {entry.time}</li>
                {entry.place ? <li>place: {entry.place}</li> : null}
                <GetAllNotes entries={entries} notes={notes} entryIDFromProps={entryID}/>
            </ul>
            <Link to="/entry"><button>Back</button></Link>
            <Link to={`/entry/${entry.id}/update`}><button>Update entry</button></Link>
            <Link to={`/entry/${entry.id}/delete`}><button>Delete entry</button></Link>
            <Link to={`/entry/${entry.id}/note/add`}><button>Add note</button></Link>
        </div>
    );
};

export default GetEntry;