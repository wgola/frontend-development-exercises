import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GetEntry from "../entry/GetEntry";
import Home from "./Home";
import AddEntry from "../entry/AddEntry";
import UpdateEntry from "../entry/UpdateEntry";
import DeleteEntry from "../entry/DeleteEntry";
import GetNote from "../note/GetNote";
import AddNote from "../note/AddNote";
import UpdateNote from "../note/UpdateNote";
import DeleteNote from "../note/DeleteNote";
import ErrorPage from "./ErrorPage";

const Main = () => {
    const [ entries, setEntries ] = useState([]);
    const [ notes, setNotes ] = useState([]);

    return (
        <Router>
            <Routes>
                <Route path="/entry/:entryID/note/:noteID/delete" element={<DeleteNote setNotes={setNotes} />} />
                <Route path="/entry/:entryID/note/:noteID/update" element={<UpdateNote notes={notes} setNotes={setNotes} entries={entries} />} />
                <Route path="/entry/:entryID/note/:noteID" element={<GetNote notes={notes} />} />
                <Route path="/entry/:entryID/note/add" element={<AddNote entries={entries} setNotes={setNotes} />} />
                <Route path="/entry/:entryID/note" element={<GetNote entries={entries} notes={notes} />} />
                <Route path="/entry/:entryID/delete" element={<DeleteEntry setEntries={setEntries} />} />
                <Route path="/entry/:entryID/update" element={<UpdateEntry setEntries={setEntries} entries={entries}/>} />
                <Route path="/entry/:entryID" element={<GetEntry entries={entries} />}>
                    <Route path="/entry/:entryID" element={<GetNote entries={entries} notes={notes} />} />    
                </Route> 
                <Route path="/entry/add" element={<AddEntry setEntries={setEntries} />} />
                <Route path="/entry" element={<GetEntry entries={entries}/>} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<ErrorPage error={"This path doesn't exist."}/>} />
            </Routes>
        </Router>
    )
};

export default Main;