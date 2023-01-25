import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Button } from "./Button";

export const HomeButton = (props) => (
  <Button {...props} type="button" startIcon={<HomeOutlinedIcon />}>
    Home
  </Button>
);
