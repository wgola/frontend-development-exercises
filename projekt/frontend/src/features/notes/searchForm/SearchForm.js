import { FormProvider, useForm } from "react-hook-form";
import { ButtonsDiv, Form, Header, Button } from "../../../components";
import { SearchFormFields } from "./SearchFormFields";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { useSearchParams } from "react-router-dom";

export const SearchForm = () => {
  const [params, setParams] = useSearchParams();

  const initialValues = {
    title: params.get("title") || "",
    "content length": params.get("content length") || "",
    importance: params.get("importance")
      ? params
          .get("importance")
          .split(",")
          .map((value) => parseInt(value))
      : [1, 10],
  };

  const formMethods = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = (data) => {
    const convertedImportance = `${data.importance[0]},${data.importance[1]}`;
    setParams({
      title: data.title,
      "content length": data["content length"],
      importance: convertedImportance,
      sort: params.get("sort") || "",
    });
  };

  const onReset = () => {
    setParams({ sort: params.get("sort") || "" });
    formMethods.reset({ title: "", "content length": "", importance: [1, 10] });
  };

  return (
    <FormProvider {...formMethods}>
      <Header>Search</Header>
      <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <SearchFormFields />
        <ButtonsDiv>
          <Button type="submit" startIcon={<SearchOutlinedIcon />}>
            Search
          </Button>
          <Button
            type="button"
            onClick={onReset}
            startIcon={<RestartAltOutlinedIcon />}
          >
            Reset
          </Button>
        </ButtonsDiv>
      </Form>
    </FormProvider>
  );
};
