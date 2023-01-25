import { styled } from "@mui/material/styles";

const StyledLabel = styled("span")`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SortOption = (props) => <StyledLabel {...props} />;
