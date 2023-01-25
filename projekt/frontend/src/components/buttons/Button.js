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

export const Button = ({ ...props }) => <StyledButton {...props} />;
