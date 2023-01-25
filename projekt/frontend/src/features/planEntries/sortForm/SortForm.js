import { getSearchParams } from "../utils/getSearchParams";
import { getSortParam } from "../utils/getSortParam";
import { useSearchParams } from "react-router-dom";
import { Form, Header } from "../../../components";
import { SortInput } from "./SortInput";

export const SortForm = () => {
  const [params, setParams] = useSearchParams();

  const { subject, day, difficulty } = getSearchParams(params);

  return (
    <>
      <Header>Sort</Header>
      <Form>
        <SortInput
          defaultValue={getSortParam(params)}
          value={getSortParam(params)}
          onChange={(event) => {
            const value = event.target.value;
            setParams({
              subject: subject,
              day: day,
              difficulty: `${difficulty[0]},${difficulty[1]}`,
              sort: value,
            });
          }}
        />
      </Form>
    </>
  );
};
