import { Link, useParams } from "react-router-dom";

const GetNote = ({ notes }) => {
    const { entryID, noteID } = useParams();
    const note = notes[noteID];
    return (
        <div>
            <p>Note info:</p>
            <ul>
                <li>ID: {note.noteID}</li>
                <li>Title: {note.title}</li>
                {note.content ? <li>Content: {note.content}</li> : null}
            </ul>
            <Link to={`/entry/${entryID}`}><button>Back</button></Link>
            <Link to={`/entry/${entryID}/note/${noteID}/update`}><button>Update note</button></Link>
            <Link to={`/entry/${entryID}/note/${noteID}/delete`}><button>Delete note</button></Link>
        </div>
    );
};

export default GetNote;