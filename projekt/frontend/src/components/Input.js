import { styled } from "@mui/material/styles";
import { MenuItem, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const StyledTextField = styled(TextField)`
  height: 70px;
`;

export const Input = (props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={props.label}
      control={control}
      render={({ field }) => (
        <StyledTextField
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          {...field}
          {...props}
          error={!!errors[props.label]}
          helperText={errors[props.label] && errors[props.label].message}
        >
          {props.options &&
            props.options.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                disabled={option.value === ""}
              >
                {option.label}
              </MenuItem>
            ))}
        </StyledTextField>
      )}
    />
  );
};
