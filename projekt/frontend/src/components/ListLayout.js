import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledGrid = styled(Grid)`
  width: 1100px;
  margin: auto;
`;

export const ListLayout = (props) => <StyledGrid {...props} />;
