import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import shortUUID from 'short-uuid';
import * as Yup from 'yup';

const NoteForm = ({ initialValues, entryID, setNotes, noteID }) => {
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Field required!").matches(/^[aA-zZ\s]+$/, "No special characters allowed!"),
        content: Yup.string().required("Field required!").matches(/^[aA-zZ\s]+$/, "No special characters allowed!")
    });
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values, {resetForm}) => {
                resetForm()
                if (noteID === null) {
                    setNotes(notes => {
                        const newId = shortUUID().new();
                        return [ ...notes, { noteID: newId, entryID: entryID, ...values } ];
                    });
                } else {
                    setNotes(notes => {
                        const changedNote = { noteID: noteID, entryID: entryID, ...values };
                        return [ ...notes.filter(note => note.noteID !== noteID), changedNote ];
                    });
                    navigate(`/entry/${entryID}/note/${noteID}`);
                }
            }
        }
        >
            <Form className='form'>
                <label htmlFor='title'>Title:</label>
                <Field type='text' name='title' />
                <ErrorMessage name='title' />

                <label htmlFor='content'>Content:</label>
                <Field as='textarea' name='content' />
                <ErrorMessage name='content' />

                <div>
                    <button type='submit'>Submit</button>
                    <button type='reset'>Reset</button>
                </div>

            </Form>
        </Formik>
    ) 
};

export default NoteForm;