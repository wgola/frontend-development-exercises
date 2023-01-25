import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Button } from "../Button";

export const HomeButton = (props) => (
  <Button {...props} startIcon={<HomeOutlinedIcon />}>
    Home
  </Button>
);
