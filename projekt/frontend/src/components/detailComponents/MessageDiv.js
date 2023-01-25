import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")`
  padding: 7px;
  width: 200px;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  border-radius: 15px;
`;

export const MessageDiv = (props) => <StyledDiv {...props} />;
