import { Input } from "../../../components";
import { Slider } from "../../../components/Slider";
import { days } from "../utils/days";
import { styled } from "@mui/material/styles";
import { difficultyMarks } from "./difficultyMarks";

const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchFormFields = () => {
  const [first, ...rest] = days;

  return (
    <>
      <Input label="subject" type="text" />
      <Input
        label="day"
        select
        options={[first, { value: "Any", label: "Any" }, ...rest]}
      />
      <StyledDiv>
        <p>Choose difficulty: </p>
        <Slider label="difficulty" marks={difficultyMarks} />
      </StyledDiv>
    </>
  );
};
