import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Button } from "./Button";

export const AddEntryButton = (props) => (
  <Button {...props} type="button" startIcon={<AddBoxOutlinedIcon />}>
    Add entry
  </Button>
);
