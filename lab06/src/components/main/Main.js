import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTimetableEntry from "../entryComponents/AddTimetableEntry";
import GetAllEntries from "../entryComponents/GetAllEntries";
import GetEntry from "../entryComponents/GetEntry";
import UpdateEntry from "../entryComponents/UpdateEntry";
import DeleteEntry from "../entryComponents/DeleteEntry";
import GetAllNotes from "../noteComponents/GetAllNotes";
import Home from "./Home";
import AddNote from "../noteComponents/AddNote";
import GetNote from "../noteComponents/GetNote";

const Main = () => {
    const [ entries, setEntries ] = useState({});
    const [ notes, setNotes ] = useState({});

    return (
      <Router >
        
        <Routes>
          <Route path="/entry/:entryID/note/:noteID" element={<GetNote notes={notes} />}/>
          <Route path="/entry/:entryID/note/add" element={<AddNote setEntries={setEntries} setNotes={setNotes}/>} />
          <Route path="/entry/:entryID/note" element={<GetAllNotes entries={entries} notes={notes} entryIDFromProps={null} />} />
          <Route path="/entry/:entryID/delete" element={<DeleteEntry setEntries={setEntries}/>} />
          <Route path="/entry/:entryID/update" element={<UpdateEntry entries={entries} setEntries={setEntries}/>} />
          <Route path="/entry/:entryID" element={<GetEntry entries={entries} notes={notes} />} />
          <Route path="/entry/add" element={<AddTimetableEntry setEntries={setEntries} />} />
          <Route path="/entry" element={<GetAllEntries entries={entries} />} />
          <Route path="/" element={<Home />} /> 
        </Routes>
  
      </Router>
    );
}


export default Main;