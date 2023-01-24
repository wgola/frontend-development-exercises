import { useSearchParams } from "react-router-dom";
import { Form, Header } from "../../../components";
import { SortInput } from "./SortInput";

export const SortForm = () => {
  const [params, setParams] = useSearchParams();
  return (
    <>
      <Header>Sort</Header>
      <Form>
        <SortInput
          defaultValue={params.get("sort") || "title-asc"}
          value={params.get("sort") || "title-asc"}
          onChange={(event) => {
            const value = event.target.value;
            setParams({
              title: params.get("title") || "",
              "content length": params.get("content length") || "",
              importance: params.get("importance") || "1,10",
              sort: value,
            });
          }}
        />
      </Form>
    </>
  );
};
