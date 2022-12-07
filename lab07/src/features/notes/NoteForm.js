import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote, getNote, updateNote } from "./noteSlice";
import { validationSchema } from "./utils/formValidation";

const NoteForm = ({ entryID, noteID }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const note = useSelector((state) => getNote(state, noteID));
  const initialValues = {
    title: note !== undefined ? note.title : "",
    content: note !== undefined ? note.content : "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        if (noteID === null) {
          dispatch(addNote(entryID, values));
        } else {
          dispatch(updateNote(noteID, entryID, values));
          navigate(`/entry/${entryID}/note/${noteID}`);
        }
      }}
    >
      <Form className="form">
        <label htmlFor="title">Title:</label>
        <Field type="text" name="title" />
        <ErrorMessage name="title" />

        <label htmlFor="content">Content:</label>
        <Field as="textarea" name="content" />
        <ErrorMessage name="content" />

        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    </Formik>
  );
};

export default NoteForm;
