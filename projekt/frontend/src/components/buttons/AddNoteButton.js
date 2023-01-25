import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import { Button } from "./Button";

export const AddNoteButton = (props) => (
  <Button {...props} type="button" startIcon={<NoteAddOutlinedIcon />}>
    Add note
  </Button>
);
