import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LeftDiv = (props) => <StyledDiv {...props} />;
