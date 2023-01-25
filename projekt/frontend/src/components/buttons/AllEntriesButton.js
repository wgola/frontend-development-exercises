import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";

import { Button } from "../Button";

export const AllEntriesButton = (props) => (
  <Button {...props} startIcon={<DensitySmallOutlinedIcon />}>
    All entries
  </Button>
);
