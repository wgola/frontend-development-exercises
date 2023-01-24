import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { Header, Loading, Tile } from "../../components";
import {
  allNotesFetched,
  getIfAllNotesFetched,
} from "../planEntries/planEntriesSlice";
import { addFetchedNotes, getAllNotesOfEntry } from "./notesSlice";
import { styled } from "@mui/material/styles";
import { NotesListElement } from "../../components/NotesListElement";

const StyledList = styled("div")`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const NotesList = () => {
  const { lessonID } = useParams();
  const dispatch = useDispatch();
  const notes = useSelector(getAllNotesOfEntry(lessonID));

  const ifAllNotesFetched = useSelector(getIfAllNotesFetched(lessonID));

  useEffect(() => {
    const fetchNotes = async () => {
      const allNotes = await axios.get(`/planEntry/${lessonID}/note`);
      dispatch(addFetchedNotes(allNotes.data));
      dispatch(allNotesFetched(lessonID));
    };
    if (!ifAllNotesFetched) fetchNotes();
  }, []);

  return (
    <Grid container spacing={2} style={{ width: "1100px", margin: "auto" }}>
      <Grid item xs={4}>
        <Tile width={400}>
          <Header>Search</Header>
        </Tile>
      </Grid>
      <Grid item xs={8}>
        <Tile width={600}>
          <Header>All notes</Header>
          <Loading />
          <StyledList>
            {notes &&
              notes[0] &&
              notes.map((note) => (
                <NotesListElement key={note._id} note={note} />
              ))}
          </StyledList>
        </Tile>
      </Grid>
    </Grid>
  );
};
