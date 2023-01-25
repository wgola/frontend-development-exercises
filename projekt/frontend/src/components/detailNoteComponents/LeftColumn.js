import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")`
  gap: 10px;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const LeftColumn = (props) => <StyledDiv {...props} />;
