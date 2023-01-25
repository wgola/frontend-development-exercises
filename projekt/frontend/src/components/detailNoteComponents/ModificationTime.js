import { styled } from "@mui/material/styles";

const StyledSpan = styled("span")`
  font-size: 13.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ModificationTime = (props) => <StyledSpan {...props} />;
