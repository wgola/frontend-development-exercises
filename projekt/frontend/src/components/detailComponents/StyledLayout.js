import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")`
  width: 1050px;
  display: flex;
  justify-content: left;
  gap: 15px;
`;

export const StyledLayout = (props) => <StyledDiv {...props} />;
