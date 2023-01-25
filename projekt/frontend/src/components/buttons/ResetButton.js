import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { Button } from "./Button";

export const ResetButton = (props) => (
  <Button {...props} type="button" startIcon={<RestartAltOutlinedIcon />}>
    Reset
  </Button>
);
