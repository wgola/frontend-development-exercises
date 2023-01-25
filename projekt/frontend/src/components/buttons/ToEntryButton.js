import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Button } from "./Button";

export const ToEntryButton = (props) => (
  <Button {...props} type="button" startIcon={<ArrowBackIosNewOutlinedIcon />}>
    To entry
  </Button>
);
