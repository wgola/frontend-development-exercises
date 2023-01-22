import { Controller, useFormContext } from "react-hook-form";
import { Slider as MUISlider } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSlider = styled(MUISlider)`
  width: 320px;
  color: black;
`;

export const Slider = (props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.label}
      control={control}
      render={({ field }) => (
        <StyledSlider
          size="small"
          valueLabelDisplay="auto"
          {...field}
          marks={props.marks}
          min={0}
          max={10}
          step={1}
        />
      )}
    />
  );
};
