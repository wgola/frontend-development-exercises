import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import { ButtonsDiv, Form, Header, Button } from "../../../components";
import { FormProvider, useForm } from "react-hook-form";
import { SortFields } from "./SortFields";

export const SortForm = ({ setSort }) => {
  const initialValues = {
    "sort by": "",
  };

  const formMethods = useForm({ defaultValues: initialValues });

  const onSubmit = (data) => {
    const [field, type] = data["sort by"].split("-");
    setSort({ field, type });
  };

  const onReset = () => {
    setSort({ field: "", type: "" });
    formMethods.reset();
  };

  return (
    <FormProvider {...formMethods}>
      <Header>Sort</Header>
      <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <SortFields />
        <ButtonsDiv>
          <Button type="submit">
            <FilterListOutlinedIcon />
            Sort
          </Button>
          <Button type="button" onClick={onReset}>
            <RestartAltOutlinedIcon />
            Reset
          </Button>
        </ButtonsDiv>
      </Form>
    </FormProvider>
  );
};
