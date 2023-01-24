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
          defaultValue={params.get("sort") || "subject-asc"}
          value={params.get("sort") || "subject-asc"}
          onChange={(event) => {
            const value = event.target.value;
            setParams({
              subject: params.get("subject") || "",
              day: params.get("day") || "",
              difficulty: params.get("difficulty") || "1,10",
              sort: value,
            });
          }}
        />
      </Form>
    </>
  );
};
