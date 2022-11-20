import short from "short-uuid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const NoteForm = ({ initialValues, setNotes, entryID, setEntries, noteID }) => {
    const noteSchema = Yup.object().shape(
        {
            title: Yup.string().required("Required!"),
            content: Yup.string()
        }
    );
    return (
        <>
            <Formik
            initialValues={initialValues}
            validationSchema={noteSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(values, { resetForm }) => {
                resetForm();
                const noteID = short().new();
                setEntries(entries => {
                    entries[entryID].notes.push(noteID);
                    return {...entries};
                })
                setNotes(notes => {
                    return {...notes, [noteID]: {noteID: noteID, ...values}};
                });
            }}
            >
                <Form className="noteForm">
                    <label htmlFor="title">Note: </label>
                    <Field type="text" name="title" />
                    <ErrorMessage name="title" />

                    <label htmlFor="content">Content: </label>
                    <Field as="textarea" name="content" />
                    <ErrorMessage name="content" />

                    <div className="buttons">
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                        <Link to={`/entry/${entryID}/note`}><button>All notes</button></Link>
                        <Link to={`/entry/${entryID}`}><button>Back to entry</button></Link>
                        <Link to={`/entry`}><button>Back to entries</button></Link>
                        {noteID && <Link to={`/entry/${entryID}/note/${noteID}`}><button>Back to note</button></Link>}
                    </div>
                </Form>
            </Formik>
        </>
    )
};

export default NoteForm;