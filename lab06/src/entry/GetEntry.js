import { Link, Outlet, useParams } from "react-router-dom";

const GetEntry = ({ entries }) => {
    const { entryID } = useParams();
    if (entryID === undefined) {
        const entriesList = entries.map(entry => <li key={entry.entryID}>ID: {entry.entryID}, name: {entry.name} 
                                                    <Link to={`/entry/${entry.entryID}`}><button>More...</button></Link>
                                                    <Link to={`/entry/${entry.entryID}/update`}><button>Update</button></Link>    
                                                    <Link to={`/entry/${entry.entryID}/delete`}><button>Delete</button></Link>
                                                    <Link to={`/entry/${entry.entryID}/note`}><button>Notes</button></Link>
                                                    <Link to={`/entry/${entry.entryID}/note/add`}><button>Add note</button></Link>
                                                </li>);
        const result = (<div>
                            <p>All entries:</p>
                            <ol>
                                {entriesList}   
                            </ol>
                            <Link to="/entry/add"><button>Add entry</button></Link>
                            <Link to="/"><button>Home</button></Link>
                        </div>);
        return result;
    } else {
        const foundEntry = entries.filter(entry => entry.entryID === entryID)[0];
        const result = (<div>
                            <p>Entry {foundEntry.entryID}</p>
                            <ul>
                                <li>ID: {foundEntry.entryID}</li>
                                <li>Name: {foundEntry.name}</li>
                                <li>Teacher: {foundEntry.teacher}</li>
                                <li>Day: {foundEntry.day}</li>
                                <li>Time: {foundEntry.time}</li>
                            </ul>
                            <div>
                                <Outlet />
                            </div>
                            <Link to="/"><button>Home</button></Link>
                            <Link to={`/entry/${entryID}/update`}><button>Update</button></Link>
                            <Link to={`/entry/${entryID}/delete`}><button>Delete</button></Link>
                        </div>);
        return result;
    }
};

export default GetEntry;