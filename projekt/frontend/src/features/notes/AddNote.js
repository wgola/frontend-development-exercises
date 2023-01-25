import { useNavigate, useParams } from "react-router-dom";
import { ButtonsDiv, Header, Tile } from "../../components";
import { NoteForm } from "./noteForm/NoteForm";
import { AllNotesButton, ToEntryButton } from "../../components/buttons";

export const AddNote = () => {
  const navigate = useNavigate();
  const { lessonID } = useParams();

  const onAllNotesClick = () => navigate(`/planEntry/${lessonID}/note`);

  const onToEntryClick = () => navigate(`/planEntry/${lessonID}`);

  return (
    <Tile width={500}>
      <Header>Add new note</Header>
      <NoteForm type="add" />
      <ButtonsDiv>
        <AllNotesButton onClick={onAllNotesClick} />
        <ToEntryButton onClick={onToEntryClick} />
      </ButtonsDiv>
    </Tile>
  );
};
