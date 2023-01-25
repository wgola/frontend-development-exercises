import { AllNotesButton, ToNoteButton } from "../../components/buttons";
import { ButtonsDiv, Header, Tile } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { NoteForm } from "./noteForm/NoteForm";

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
        <AllNotesButton onClick={onAllNotesClicked} />
        <ToNoteButton onClick={onToNoteClicked} />
      </ButtonsDiv>
    </Tile>
  );
};
