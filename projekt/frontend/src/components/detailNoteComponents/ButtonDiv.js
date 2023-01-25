import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")`
  margin: 8px 0px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ButtonDiv = (props) => <StyledDiv {...props} />;
