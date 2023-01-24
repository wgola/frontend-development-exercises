import { Input } from "../../../components";
import { styled } from "@mui/material/styles";

const TextArea = styled(Input)`
  height: 170px;
`;

export const NoteFormFields = ({ loading }) => (
  <>
    <Input label="title" type="text" disabled={loading} />
    <TextArea label="content" multiline rows={5} disabled={loading} />
    <Input label="importance" type="number" disabled={loading} />
    <Input label="image" type="text" disabled={loading} />
  </>
);
