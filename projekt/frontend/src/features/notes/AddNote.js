import { useNavigate } from "react-router-dom";
import { Header, Tile } from "../../components";
import { NoteForm } from "./noteForm/NoteForm";

export const AddNote = () => {
  const navigate = useNavigate();

  return (
    <Tile width={500}>
      <Header>Add new note</Header>
      <NoteForm type="add" />
    </Tile>
  );
};
