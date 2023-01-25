import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const RightColumn = (props) => <StyledDiv {...props} />;
