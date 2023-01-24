import { styled } from "@mui/material/styles";
import { Input } from "../../../components";
import { days } from "../utils/days.js";

const StyledDiv = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const PlanEntryFormFields = ({ loading }) => (
  <>
    <Input label="subject" type="text" disabled={loading} />
    <Input label="teacher" type="text" disabled={loading} />
    <Input label="day" select options={days} disabled={loading} />
    <StyledDiv>
      <Input label="time" type="time" disabled={loading} />
      <Input label="difficulty" type="number" disabled={loading} />
    </StyledDiv>
    <Input label="image" type="text" disabled={loading} />
  </>
);
