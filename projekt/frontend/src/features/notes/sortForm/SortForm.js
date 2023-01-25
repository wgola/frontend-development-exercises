import { useSearchParams } from "react-router-dom";
import { Form, Header } from "../../../components";
import { getSortParam } from "../utils/getSortParam";
import { SortInput } from "./SortInput";
import { getSearchParams } from "../utils/getSearchParams";

export const SortForm = () => {
  const [params, setParams] = useSearchParams();

  const {
    title,
    "content length": contentLength,
    importance,
  } = getSearchParams(params);

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
              title: title,
              "content length": contentLength
                ? `${contentLength[0]}-${contentLength[1]}`
                : "",
              importance: `${importance[0]},${importance[1]}`,
              sort: value,
            });
          }}
        />
      </Form>
    </>
  );
};
