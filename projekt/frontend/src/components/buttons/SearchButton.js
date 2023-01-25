import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button } from "../Button";

export const SearchButton = (props) => (
  <Button {...props} type="submit" startIcon={<SearchOutlinedIcon />}>
    Search
  </Button>
);
