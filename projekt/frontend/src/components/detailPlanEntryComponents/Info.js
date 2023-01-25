import { styled } from "@mui/material/styles";

const StyledDiv = styled("span")`
  font-weight: bold;
  letter-spacing: 2px;
`;

export const Info = (props) => <StyledDiv {...props} />;
