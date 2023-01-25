import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Button } from "../Button";

export const AddEntryButton = (props) => (
  <Button {...props} startIcon={<AddBoxOutlinedIcon />}>
    Add entry
  </Button>
);
