import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import { Button } from "../Button";

export const AllNotesButton = (props) => (
  <Button {...props} startIcon={<NoteAltOutlinedIcon />}>
    All notes
  </Button>
);
