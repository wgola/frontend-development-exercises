import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")`
  height: 170px;
  display: flex;
  padding: 15px;
  flex-direction: row;
`;

export const DetailsDiv = (props) => <StyledDiv {...props} />;
