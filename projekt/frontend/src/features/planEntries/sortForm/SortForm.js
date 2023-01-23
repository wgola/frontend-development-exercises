import { Form, Header } from "../../../components";
import { SortInput } from "./SortInput";

export const SortForm = ({ sort, setSort }) => {
  return (
    <>
      <Header>Sort</Header>
      <Form>
        <SortInput
          defaultValue={`${sort.field}-${sort.type}`}
          value={`${sort.field}-${sort.type}`}
          onChange={(event) => {
            const [field, type] = event.target.value.split("-");
            setSort({ field, type });
          }}
        />
      </Form>
    </>
  );
};
