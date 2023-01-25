import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { Button } from "../Button";

export const ResetButton = (props) => (
  <Button {...props} startIcon={<RestartAltOutlinedIcon />}>
    Reset
  </Button>
);
