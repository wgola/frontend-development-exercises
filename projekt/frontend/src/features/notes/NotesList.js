import { Header, List, ListLayout, Loading, Tile } from "../../components";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { NotesListElement } from "../../components/NotesListElement";
import { addFetchedNotes, getAllNotesOfEntry } from "./notesSlice";
import { filterAndSortNotes } from "./utils/filterAndSortNotes";
import { useDispatch, useSelector } from "react-redux";
import { SearchForm } from "./searchForm/SearchForm";
import { SortForm } from "./sortForm/SortForm";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import axios from "../../axios";
import {
  allNotesFetched,
  getIfAllNotesFetched,
  getPlanEntryByID,
} from "../planEntries/planEntriesSlice";

export const NotesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [params] = useSearchParams();
  const { lessonID } = useParams();
  const planEntry = useSelector(getPlanEntryByID(lessonID));
  const allNotes = useSelector(getAllNotesOfEntry(lessonID));
  const ifAllNotesFetched = useSelector(getIfAllNotesFetched(lessonID));

  useEffect(() => {
    const fetchNotes = async () => {
      if (!planEntry) {
        navigate(`/planEntry/${lessonID}`);
      } else {
        const allNotes = await axios.get(`/planEntry/${lessonID}/note`);
        if (allNotes.data.length === 0) {
          navigate(`/planEntry/${lessonID}`);
        } else {
          dispatch(addFetchedNotes(allNotes.data));
          dispatch(allNotesFetched(lessonID));
        }
      }
    };
    if (!ifAllNotesFetched) fetchNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <ListLayout container spacing={2}>
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
          <List>
            {ifAllNotesFetched &&
              filterAndSortNotes(params, allNotes).map((note) => (
                <NotesListElement key={note._id} note={note} />
              ))}
          </List>
        </Tile>
      </Grid>
    </ListLayout>
  );
};
