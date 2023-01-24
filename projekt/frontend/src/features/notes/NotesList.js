import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "../../axios";
import { Header, Loading, Tile } from "../../components";
import {
  allNotesFetched,
  getIfAllNotesFetched,
} from "../planEntries/planEntriesSlice";
import { addFetchedNotes, getAllNotesOfEntry } from "./notesSlice";
import { styled } from "@mui/material/styles";
import { NotesListElement } from "../../components/NotesListElement";
import { SearchForm } from "./searchForm/SearchForm";
import { SortForm } from "./sortForm/SortForm";
import { filterAndSortNotes } from "./utils/filterAndSortNotes";

const StyledList = styled("div")`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const NotesList = () => {
  const [params] = useSearchParams();
  const { lessonID } = useParams();
  const dispatch = useDispatch();

  const allNotes = useSelector(getAllNotesOfEntry(lessonID));
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
          <SearchForm />
          <SortForm />
        </Tile>
      </Grid>
      <Grid item xs={8}>
        <Tile width={600}>
          <Header>All notes</Header>
          <Loading />
          <StyledList>
            {ifAllNotesFetched &&
              filterAndSortNotes(params, allNotes).map((note) => (
                <NotesListElement key={note._id} note={note} />
              ))}
          </StyledList>
        </Tile>
      </Grid>
    </Grid>
  );
};
