import { Link, useParams } from "react-router-dom";

const GetAllNotes = ({ entries, notes, entryIDFromProps }) => {
    let { entryID } = useParams();
    if (entryID === undefined) {
        entryID = entryIDFromProps;
    }; 
    console.log(entryID);
    const notesIDs = entries[entryID].notes;
    const allNotesForEntry = notesIDs.map(id => {
        const note = notes[id];
        return <li key={note.noteID}>ID: {note.noteID}, title: {note.title} 
                <Link to={`/entry/${entryID}/note/${note.noteID}`}><button>More...</button></Link>
                <Link to={`/entry/${entryID}/note/${note.noteID}/delete`}><button>Delete note</button></Link>
                <Link to={`/entry/${entryID}/note/${note.noteID}/update`}><button>Update note</button></Link>
            </li>
    });
    const result = (
        <>
            <p>Notes for entry {entryID}: </p>
            <ul>{allNotesForEntry}</ul>
        </>)
    return allNotesForEntry.length !== 0 ? result : <p>No notes for this entry</p>
};

export default GetAllNotes;