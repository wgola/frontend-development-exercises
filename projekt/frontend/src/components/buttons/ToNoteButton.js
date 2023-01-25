import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Button } from "./Button";

export const ToNoteButton = (props) => (
  <Button {...props} type="button" startIcon={<ArrowBackIosNewOutlinedIcon />}>
    To note
  </Button>
);
