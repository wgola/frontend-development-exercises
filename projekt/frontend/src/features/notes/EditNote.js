import { useNavigate, useParams } from "react-router-dom";
import { Button, ButtonsDiv, Header, Tile } from "../../components";
import { NoteForm } from "./noteForm/NoteForm";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export const EditNote = () => {
  const navigate = useNavigate();
  const { lessonID, noteID } = useParams();

  const onAllNotesClicked = () => navigate(`/planEntry/${lessonID}/note`);

  const onToNoteClicked = () =>
    navigate(`/planEntry/${lessonID}/note/${noteID}`);

  return (
    <Tile width={500}>
      <Header>Edit note</Header>
      <NoteForm type="edit" />
      <ButtonsDiv>
        <Button startIcon={<NoteAltOutlinedIcon />} onClick={onAllNotesClicked}>
          All notes
        </Button>
        <Button
          startIcon={<ArrowBackIosNewOutlinedIcon />}
          onClick={onToNoteClicked}
        >
          to note
        </Button>
      </ButtonsDiv>
    </Tile>
  );
};
