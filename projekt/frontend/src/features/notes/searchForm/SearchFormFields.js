import { Input, Slider } from "../../../components";
import { contentLengths } from "./contentLengths";
import { styled } from "@mui/material/styles";
import { importanceMarks } from "./importanceMarks";

const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchFormFields = () => (
  <>
    <Input label="title" type="text" />
    <Input label="content length" select options={contentLengths} />
    <StyledDiv>
      <p>Choose importance: </p>
      <Slider label="importance" marks={importanceMarks} />
    </StyledDiv>
  </>
);
