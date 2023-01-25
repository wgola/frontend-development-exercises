import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const planEntryValidationSchema = Yup.object().shape({
  subject: Yup.string().required("Field required!").min(3).max(20),
  teacher: Yup.string().required("Field required!").min(3).max(20),
  day: Yup.string().required("Field required!"),
  time: Yup.string().required("Field required!"),
  difficulty: Yup.number()
    .typeError("Enter a number!")
    .required("Field required!")
    .min(1, "Enter number from 1-10!")
    .max(10, "Enter number from 1-10!"),
  image: Yup.string().required("Field required!"),
});

export default yupResolver(planEntryValidationSchema);
