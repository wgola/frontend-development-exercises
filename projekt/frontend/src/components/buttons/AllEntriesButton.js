import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";
import { Button } from "./Button";

export const AllEntriesButton = (props) => (
  <Button {...props} type="button" startIcon={<DensitySmallOutlinedIcon />}>
    All entries
  </Button>
);
