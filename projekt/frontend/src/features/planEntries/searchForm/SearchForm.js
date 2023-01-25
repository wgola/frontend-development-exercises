import { ResetButton, SearchButton } from "../../../components/buttons";
import { ButtonsDiv, Form, Header } from "../../../components";
import { getSortParam } from "../../notes/utils/getSortParam";
import { getSearchParams } from "../utils/getSearchParams";
import { FormProvider, useForm } from "react-hook-form";
import { SearchFormFields } from "./SearchFormFields";
import { useSearchParams } from "react-router-dom";

export const SearchForm = () => {
  const [params, setParams] = useSearchParams();

  const initialValues = getSearchParams(params);

  const formMethods = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = (data) => {
    const convertedDifficulty = `${data.difficulty[0]},${data.difficulty[1]}`;
    setParams({
      subject: data.subject,
      day: data.day,
      difficulty: convertedDifficulty,
      sort: getSortParam(params),
    });
  };

  const onReset = () => {
    setParams({ sort: getSortParam(params) });
    formMethods.reset({ title: "", day: "", difficulty: [1, 10] });
  };

  return (
    <FormProvider {...formMethods}>
      <Header>Search</Header>
      <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <SearchFormFields />
        <ButtonsDiv>
          <SearchButton />
          <ResetButton onClick={onReset} />
        </ButtonsDiv>
      </Form>
    </FormProvider>
  );
};
