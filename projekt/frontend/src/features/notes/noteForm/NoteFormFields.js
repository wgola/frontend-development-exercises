import { Input } from "../../../components";
import { styled } from "@mui/material/styles";

const TextArea = styled(Input)`
  height: 170px;
`;

export const NoteFormFields = () => (
  <>
    <Input label="title" type="text" />
    <TextArea label="content" multiline rows={5} />
    <Input label="importance" type="number" />
    <Input label="image" type="text" />
  </>
);
