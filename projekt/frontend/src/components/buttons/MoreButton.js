import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Button } from "./Button";

export const MoreButton = (props) => (
  <Button {...props} type="button" startIcon={<MoreHorizOutlinedIcon />}>
    More
  </Button>
);
