import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button } from "./Button";

export const DeleteButton = (props) => (
  <Button {...props} type="button" startIcon={<DeleteOutlineOutlinedIcon />}>
    Delete
  </Button>
);
