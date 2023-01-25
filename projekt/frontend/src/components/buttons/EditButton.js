import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Button } from "./Button";

export const EditButton = (props) => (
  <Button {...props} type="button" startIcon={<EditOutlinedIcon />}>
    Edit
  </Button>
);
