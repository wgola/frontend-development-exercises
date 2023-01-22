import { styled } from "@mui/material/styles";

const StyledDiv = styled("div", {
  shouldForwardProp: (prop) => prop !== "width" && prop !== "height",
})`
  width: ${({ width }) => (width ? `${width}px` : "100px")};
  ${({ height }) => (height ? `${height}px` : "")};
  background-color: ${({ theme }) => theme.palette.background.main};
  margin: 30px auto;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  flex-direction: column;
`;

export const Tile = ({ width, height, children }) => (
  <StyledDiv width={width} height={height}>
    {children}
  </StyledDiv>
);
