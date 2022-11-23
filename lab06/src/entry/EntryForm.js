import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import shortUUID from "short-uuid";

const EntryForm = ({ initialValues, entryID, setEntries }) => {
    const navigate = useNavigate()
    const validationSchema = Yup.object().shape({
        subject: Yup.string().required("Field required!").matches(/^[aA-zZ\s]+$/, "No special characters allowed!").min(3).max(30),
        teacher: Yup.string().required("Field required!").matches(/^[aA-zZ\s]+$/, "No special characters allowed!").min(3).max(30),
        day: Yup.string().required("Field required!"),
        time: Yup.string().required("Field required!")
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
            <Form className="form">
                <label htmlFor="subject">Subject: </label>
                <Field type="text" name="subject" />
                <ErrorMessage name="subject" />

                <label htmlFor="teacher">Teacher: </label>
                <Field type="text" name="teacher" />
                <ErrorMessage name="teacher" />
                
                <label htmlFor="day">Day: </label>
                <Field as="select" name="day">
                    <option value="">Choose day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </Field>
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