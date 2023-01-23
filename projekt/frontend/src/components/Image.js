import { styled } from "@mui/material/styles";

const StyledImage = styled("img")`
  width: 200px;
  height: 200px;
  border-radius: 25px;
  border: 5px solid ${({ theme }) => theme.palette.secondary.main};
  background-color: grey;
`;

export const Image = (props) => <StyledImage {...props} />;
