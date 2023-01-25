import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const entryValidationSchema = Yup.object().shape({
  title: Yup.string().required("Field required!").min(3).max(20),
  content: Yup.string().required("Field required!").min(3).max(175),
  importance: Yup.number()
    .typeError("Enter a number!")
    .required("Field required!")
    .min(1, "Enter number from 1-10!")
    .max(10, "Enter number from 1-10!"),
  image: Yup.string().required("Field required!"),
});

export default yupResolver(entryValidationSchema);
