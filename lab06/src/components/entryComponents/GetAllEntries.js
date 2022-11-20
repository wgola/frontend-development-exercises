import { Link } from "react-router-dom";

const GetAllEntries = ({ entries }) => {
    const keys = Object.keys(entries);

    const list = keys.map(key => {
        const entry = entries[key];
        return (
            <li key={entry.id}>
                <p>ID: {entry.id}, name: {entry.name}, number of notes: {entry.notes.length} 
                    <Link to={`/entry/${entry.id}`}><button>More...</button></Link>
                    <Link to={`/entry/${entry.id}/note/add`}><button>Add note</button></Link>
                    <Link to={`/entry/${entry.id}/update`}><button>Update entry</button></Link>
                    <Link to={`/entry/${entry.id}/delete`}><button>Delete entry</button></Link>
                </p>
            </li>);
    });

    return (
        <div>
            <p>All entries:</p>
            <ul>{list}</ul>
            <Link to="/entry/add"><button>Add entry</button></Link>
            <Link to="/"><button>Home</button></Link>
        </div>
        );
};

export default GetAllEntries;