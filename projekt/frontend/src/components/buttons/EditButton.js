import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Button } from "../Button";

export const EditButton = (props) => (
  <Button {...props} startIcon={<EditOutlinedIcon />}>
    Edit
  </Button>
);
