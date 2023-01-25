import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const List = (props) => <StyledDiv {...props} />;
