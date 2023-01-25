import { styled } from "@mui/material/styles";

const StyledDiv = styled("span")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BothSides = (props) => <StyledDiv {...props} />;
