import { styled } from "@mui/material/styles";
import { Button as MUIButton } from "@mui/material";

const StyledButton = styled(MUIButton)`
  width: 150px;
  height: 50px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: black;
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const StyledSpan = styled("span")`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Button = ({ type, children, onClick, disabled }) => (
  <StyledButton type={type} onClick={onClick} disabled={disabled}>
    <StyledSpan>{children}</StyledSpan>
  </StyledButton>
);
