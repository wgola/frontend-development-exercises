import { SearchButton, ResetButton } from "../../../components/buttons";
import { ButtonsDiv, Form, Header } from "../../../components";
import { getSearchParams } from "../utils/getSearchParams";
import { FormProvider, useForm } from "react-hook-form";
import { SearchFormFields } from "./SearchFormFields";
import { useSearchParams } from "react-router-dom";
import { getSortParam } from "../utils/getSortParam";

export const SearchForm = () => {
  const [params, setParams] = useSearchParams();

  const initialValues = getSearchParams(params);

  const formMethods = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = (data) => {
    const convertedImportance = `${data.importance[0]},${data.importance[1]}`;
    setParams({
      title: data.title,
      "content length": data["content length"],
      importance: convertedImportance,
      sort: getSortParam(params),
    });
  };

  const onReset = () => {
    setParams({ sort: getSortParam(params) });
    formMethods.reset({ title: "", "content length": "", importance: [1, 10] });
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
