import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")`
  display: flex;
  padding: 15px;
  flex-direction: column;
  justify-content: space-around;
`;

export const DetailsDiv = (props) => <StyledDiv {...props} />;
