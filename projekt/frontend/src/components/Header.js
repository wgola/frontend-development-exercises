import { styled } from "@mui/material/styles";

const StyledH2 = styled("h2")`
  margin: 0;
`;

export const Header = ({ children }) => <StyledH2>{children}</StyledH2>;
