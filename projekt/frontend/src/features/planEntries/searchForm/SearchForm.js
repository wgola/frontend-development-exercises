import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { Button, ButtonsDiv, Form, Header } from "../../../components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FormProvider, useForm } from "react-hook-form";
import { SearchFormFields } from "./SearchFormFields";

export const SearchForm = ({ setSearch }) => {
  const initialValues = {
    subject: "",
    day: "",
    difficulty: [0, 0],
  };

  const formMethods = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = (data) => setSearch(data);

  const onReset = () => {
    setSearch(initialValues);
    formMethods.reset();
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
