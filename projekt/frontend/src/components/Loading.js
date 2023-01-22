import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")`
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
`;

export const Loading = ({ isLoading, message }) => (
  <StyledDiv>
    {!isLoading && message}
    {isLoading && <CircularProgress size={35} />}
  </StyledDiv>
);
