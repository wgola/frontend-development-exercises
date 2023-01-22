import { styled } from "@mui/material/styles";

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 17px;
  margin: 30px 0px;
`;

export const Form = ({ children, onSubmit }) => (
  <StyledForm onSubmit={onSubmit} autoComplete="off">
    {children}
  </StyledForm>
);
