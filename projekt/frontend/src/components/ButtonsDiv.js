import { styled } from "@mui/material/styles";

const StyledDiv = styled("div", {
  shouldForwardProp: (prop) => prop !== "width",
})`
  width: ${({ width }) => (width ? `${width}px` : "350px")};
  display: flex;
  justify-content: space-around;
`;

export const ButtonsDiv = ({ children, width }) => (
  <StyledDiv width={width}>{children}</StyledDiv>
);
