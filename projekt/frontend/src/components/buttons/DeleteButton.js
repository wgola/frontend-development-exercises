import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button } from "../Button";

export const DeleteButton = (props) => (
  <Button {...props} startIcon={<DeleteOutlineOutlinedIcon />}>
    Delete
  </Button>
);
