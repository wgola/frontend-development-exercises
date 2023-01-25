import { deleteNoteFromEntry } from "../planEntries/planEntriesSlice";
import { addNewNote, deleteNote, getNoteByID } from "./notesSlice";
import { Tile, Image, Header, Loading } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "../../axios";
import {
  DetailsDiv,
  ButtonDiv,
  LeftColumn,
  RightColumn,
  ModificationTime,
} from "../../components/detailNoteComponents";
import {
  StyledLayout,
  LeftDiv,
  RightDiv,
  Info,
  MessageDiv,
} from "../../components/detailComponents";
import {
  AllEntriesButton,
  ToEntryButton,
  AllNotesButton,
  EditButton,
  DeleteButton,
} from "../../components/buttons";

export const DetailNote = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { lessonID, noteID } = useParams();
  const note = useSelector(getNoteByID(noteID));
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Loading plan entry...");

  useEffect(() => {
    const fetchNote = async () => {
      const note = await axios.get(`/planEntry/${lessonID}/note/${noteID}`);
      if (!note.data) {
        setLoading(false);
        setMessage(
          `Note with ID ${noteID} doesn't exist. Redirecting to home page...`
        );
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        dispatch(addNewNote(note.data));
        setLoading(false);
        setMessage("");
      }
    };
    if (!note) fetchNote();
    else {
      setLoading(false);
      setMessage("");
    }
  }, []);

  const onDeleteClicked = async () => {
    try {
      await axios.delete(`/planEntry/${lessonID}/note/${noteID}`);
      setMessage("Note deleted! Redirecting to entry...");
      setTimeout(() => {
        dispatch(deleteNoteFromEntry({ lessonID, noteID }));
        dispatch(deleteNote(noteID));
        navigate(`/planEntry/${lessonID}`);
      }, 2000);
    } catch (error) {
      setMessage(error.response.data.message);
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const onAllEntriesClicked = () => navigate(`/planEntry`);

  const onToEntryClicked = () => navigate(`/planEntry/${lessonID}`);

  const onAllNotesClicked = () => navigate(`/planEntry/${lessonID}/note`);

  const onEditClicked = () =>
    navigate(`/planEntry/${lessonID}/note/${noteID}/edit`);

  return (
    <Tile width={1100}>
      {note ? (
        <StyledLayout>
          <LeftDiv>
            <Image src={note.image} alt="note image" />
            {message && <MessageDiv>{message}</MessageDiv>}
          </LeftDiv>
          <RightDiv>
            <Header>Note #{note._id}</Header>
            <DetailsDiv>
              <LeftColumn>
                <span>
                  Title: <Info>{note.title}</Info>
                </span>
                <span>Content:</span>
                <span>{note.content}</span>
              </LeftColumn>
              <RightColumn>
                <span>
                  Importance: <Info>{note.importance}</Info>
                </span>
                <ModificationTime>
                  <span>Last modified:</span>
                  <Info>{note.modificationTime}</Info>
                </ModificationTime>
              </RightColumn>
            </DetailsDiv>
            <ButtonDiv>
              <AllEntriesButton onClick={onAllEntriesClicked} />
              <ToEntryButton onClick={onToEntryClicked} />
              <AllNotesButton onClick={onAllNotesClicked} />
              <EditButton onClick={onEditClicked} />
              <DeleteButton onClick={onDeleteClicked} />
            </ButtonDiv>
          </RightDiv>
        </StyledLayout>
      ) : (
        <Loading isLoading={loading} message={message} />
      )}
    </Tile>
  );
};
