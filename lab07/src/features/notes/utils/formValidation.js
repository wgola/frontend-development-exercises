import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Field required!")
    .matches(/^[aA-zZ\s]+$/, "No special characters allowed!")
    .min(1)
    .max(30),
  content: Yup.string()
    .required("Field required!")
    .matches(/^[aA-zZ\s]+$/, "No special characters allowed!")
    .min(1)
    .max(300),
});
