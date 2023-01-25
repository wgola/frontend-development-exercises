import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import { Button } from "./Button";

export const SubmitButton = (props) => (
  <Button {...props} type="submit" startIcon={<PublishOutlinedIcon />}>
    Submit
  </Button>
);
