import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  subject: Yup.string()
    .required("Field required!")
    .matches(/^[aA-zZ\s]+$/, "No special characters allowed!")
    .min(3)
    .max(30),
  teacher: Yup.string()
    .required("Field required!")
    .matches(/^[aA-zZ\s]+$/, "No special characters allowed!")
    .min(3)
    .max(30),
  day: Yup.string().required("Field required!"),
  time: Yup.string().required("Field required!"),
});
