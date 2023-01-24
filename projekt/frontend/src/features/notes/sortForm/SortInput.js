import { styled } from "@mui/material/styles";
import { MenuItem, TextField } from "@mui/material";
import { noteSortOptions } from "./noteSortOptions";

const StyledTextField = styled(TextField)`
  & label {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 17px;
  }
  & .MuiOutlinedInput-root fieldset {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
  height: 70px;
`;

export const SortInput = (props) => (
  <StyledTextField
    variant="outlined"
    InputLabelProps={{ shrink: true }}
    select
    {...props}
  >
    {noteSortOptions.map((option) => (
      <MenuItem
        key={option.value}
        value={option.value}
        disabled={option.value === ""}
      >
        {option.label}
      </MenuItem>
    ))}
  </StyledTextField>
);
