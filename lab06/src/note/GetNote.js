import { Link, useParams } from "react-router-dom";

const GetNote = ({ notes }) => {
    const { entryID, noteID } = useParams();
    if (noteID === undefined) {
        const notesList = notes
                        .filter(note => note.entryID === entryID)
                        .map(note => <li key={note.noteID}>ID: {note.noteID}, title: {note.title}
                                    <Link to={`/entry/${entryID}/note/${note.noteID}`}><button>More</button></Link>
                                    <Link to={`/entry/${entryID}/note/${note.noteID}/update`}><button>Update</button></Link>
                                    <Link to={`/entry/${entryID}/note/${note.noteID}/delete`}><button>Delete</button></Link>
                                    </li>);
        const result = (<div>
                            <p>All notes:</p>
                            <ol>
                                {notesList}
                            </ol>
                            <Link to={`/entry/${entryID}/note/add`}><button>Add note</button></Link>
                            <Link to={`/entry`}><button>All entries</button></Link>
                        </div>);
        return result;
    } else {
        const foundNote = notes.filter(note => note.noteID === noteID)[0];
        const result = (<div>
                            <p>Note {foundNote.noteID}</p>
                            <ul>
                                <li>ID: {foundNote.noteID}</li>
                                <li>Title: {foundNote.title}</li>
                                <li>Content: {foundNote.content}</li>
                            </ul>
                            <Link to={`/entry/${entryID}`}><button>Back to entry</button></Link>
                            <Link to={`/entry/${entryID}/note`}><button>All notes</button></Link>
                            <Link to={`/entry/${entryID}/note/${noteID}/update`}><button>Update</button></Link>
                            <Link to={`/entry/${entryID}/note/${noteID}/delete`}><button>Delete</button></Link>
                        </div>);
        return result;
    }
}; 

export default GetNote;