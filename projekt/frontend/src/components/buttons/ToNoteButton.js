import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Button } from "../Button";

export const ToNoteButton = (props) => (
  <Button {...props} startIcon={<ArrowBackIosNewOutlinedIcon />}>
    To note
  </Button>
);
