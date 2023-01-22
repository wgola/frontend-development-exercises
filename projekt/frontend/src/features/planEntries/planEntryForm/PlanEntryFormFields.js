import { Input } from "../../../components/Input.js";
import { days } from "../utils/days.js";
import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const PlanEntryFormFields = () => (
  <>
    <Input label="subject" type="text" />
    <Input label="teacher" type="text" />
    <Input label="day" select options={days} />
    <StyledDiv>
      <Input label="time" type="time" />
      <Input label="difficulty" type="number" />
    </StyledDiv>
    <Input label="image" type="text" />
  </>
);
