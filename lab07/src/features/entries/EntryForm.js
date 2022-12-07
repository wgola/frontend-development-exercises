import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addEntry, updateEntry, getEntry } from "./entrySlice";
import { validationSchema } from "./utils/formValidation";
import DaysSelect from "./components/DaysSelect";

const EntryForm = ({ entryID }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const entry = useSelector((state) => getEntry(state, entryID));

  const initialValues = {
    subject: entry !== undefined ? entry.subject : "",
    teacher: entry !== undefined ? entry.teacher : "",
    day: entry !== undefined ? entry.day : "",
    time: entry !== undefined ? entry.time : "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        if (entryID === null) {
          dispatch(addEntry(values));
        } else {
          dispatch(updateEntry(entryID, values));
          navigate(`/entry/${entryID}`);
        }
      }}
    >
      <Form className="form">
        <label htmlFor="subject">Subject: </label>
        <Field type="text" name="subject" />
        <ErrorMessage name="subject" />

        <label htmlFor="teacher">Teacher: </label>
        <Field type="text" name="teacher" />
        <ErrorMessage name="teacher" />

        <label htmlFor="day">Day: </label>
        <DaysSelect name="day" />
        <ErrorMessage name="day" />

        <label htmlFor="time">Time: </label>
        <Field type="time" name="time" />
        <ErrorMessage name="time" />

        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    </Formik>
  );
};

export default EntryForm;
