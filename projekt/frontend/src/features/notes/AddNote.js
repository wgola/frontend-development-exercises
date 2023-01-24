import { useNavigate, useParams } from "react-router-dom";
import { Button, ButtonsDiv, Header, Tile } from "../../components";
import { NoteForm } from "./noteForm/NoteForm";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export const AddNote = () => {
  const { lessonID } = useParams();
  const navigate = useNavigate();

  const onAllNotesClick = () => navigate(`/planEntry/${lessonID}/note`);

  const onToEntryClick = () => navigate(`/planEntry/${lessonID}`);

  return (
    <Tile width={500}>
      <Header>Add new note</Header>
      <NoteForm type="add" />
      <ButtonsDiv>
        <Button onClick={onAllNotesClick}>
          <NoteAltOutlinedIcon />
          All notes
        </Button>
        <Button onClick={onToEntryClick}>
          <ArrowBackIosNewOutlinedIcon />
          To entry
        </Button>
      </ButtonsDiv>
    </Tile>
  );
};
