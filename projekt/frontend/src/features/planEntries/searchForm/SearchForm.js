import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { Button, ButtonsDiv, Form, Header } from "../../../components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FormProvider, useForm } from "react-hook-form";
import { SearchFormFields } from "./SearchFormFields";
import { useSearchParams } from "react-router-dom";

export const SearchForm = () => {
  const [params, setParams] = useSearchParams();

  const initialValues = {
    subject: params.get("subject") || "",
    day: params.get("day") || "",
    difficulty: params.get("difficulty")
      ? params
          .get("difficulty")
          .split(",")
          .map((value) => parseInt(value))
      : [1, 10],
  };

  const formMethods = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = (data) => {
    const convertedDifficulty = `${data.difficulty[0]},${data.difficulty[1]}`;
    setParams({
      subject: data.subject,
      day: data.day,
      difficulty: convertedDifficulty,
      sort: params.get("sort") || "",
    });
  };

  const onReset = () => {
    setParams({ sort: params.get("sort") || "" });
    formMethods.reset({ title: "", day: "", difficulty: [1, 10] });
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
