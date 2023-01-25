import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")`
  padding: 17px;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  width: 850px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;

export const RightDiv = (props) => <StyledDiv {...props} />;
