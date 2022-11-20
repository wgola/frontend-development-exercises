import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import short from 'short-uuid';

const EntryForm = ({ initialValues, setEntries, entryID }) => {
    const navigate = useNavigate();

    const entrySchema = Yup.object().shape(
        {
            name: Yup.string().required('Required!'),
            teacher: Yup.string().required('Required!'),
            day: Yup.string().required('Required!'),
            time: Yup.string().required('Required!'),
            place: Yup.string()  
        }
    );
    return (
        <>
            <Formik 
            initialValues={initialValues}
            validationSchema={entrySchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={
                (values, { resetForm }) => {
                    resetForm();
                    if (entryID !== null) {
                        setEntries(entries => {
                            entries[entryID] = {id: entryID, ...values}
                            return { ...entries };
                        });
                        navigate(`/${entryID}`)
                    } else {
                        setEntries(entries => {
                            const id = short().new();
                            return {...entries, [id]: {id: id, ...values, notes: []}}
                        });
                    }
                }
            }
            >
                <Form className="addEntryForm">
                    <label htmlFor="name">Name: </label>
                    <Field type='text' name='name' />
                    <ErrorMessage name='name' />
    
                    <label htmlFor="teacher">Teacher: </label>
                    <Field type='text' name='teacher' />
                    <ErrorMessage name='teacher' />
    
                    <label htmlFor="day">day: </label>
                    <Field as='select' name='day'>
                        <option value="">Choose day</option>
                        <option value="monday">monday</option>
                        <option value="tuesday">tuesday</option>
                        <option value="wednesday">wednesday</option>
                        <option value="thursday">thursday</option>
                        <option value="friday">friday</option>
                    </Field>
                    <ErrorMessage name='day' />
    
                    <label htmlFor="time">Time: </label>
                    <Field type='time' name='time' />
                    <ErrorMessage name='time' />
    
                    <label htmlFor="place">Place: </label>
                    <Field type='text' name='place' />
                    <ErrorMessage name='place' />
    
                    <div className="buttons">
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                        <Link to="/entry"><button>All entries</button></Link>
                        <Link to="/"><button>Home</button></Link>
                        {entryID && <Link to={`/entry/${entryID}`}><button>Back to entry</button></Link>}
                    </div>
                </Form>
            </Formik>
        </>
        )
};

export default EntryForm;

