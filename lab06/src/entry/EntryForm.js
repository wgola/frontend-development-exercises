import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import shortUUID from "short-uuid";

const EntryForm = ({ initialValues, entryID, setEntries }) => {
    const navigate = useNavigate()
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        teacher: Yup.string().required(),
        day: Yup.string().required(),
        time: Yup.string().required()
    });
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values, { resetForm }) => {
                resetForm();
                if (entryID === null) {
                    setEntries(entries => {
                        const newID = shortUUID().new();
                        return [ ...entries, { entryID: newID, ...values } ];
                    });
                } else {
                    setEntries(entries => {
                        const changedEntry = { entryID: entryID, ...values };
                        return [ ...entries.filter(entry => entry.entryID !== entryID), changedEntry ]; 
                    });
                    navigate(`/entry/${entryID}`);
                }
            }
        }
        >
            <Form>
                <label htmlFor="name">Name: </label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" />

                <label htmlFor="teacher">Teacher: </label>
                <Field type="text" name="teacher" />
                <ErrorMessage name="teacher" />
                
                <label htmlFor="day">Day: </label>
                <Field type="text" name="day" />
                <ErrorMessage name="day" />

                <label htmlFor="time">Time: </label>
                <Field type="time" name="time" />
                <ErrorMessage name="time" />

                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </Form>
        </Formik>
    );
};

export default EntryForm;