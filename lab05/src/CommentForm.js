import { ErrorMessage, Field, Form, Formik } from 'formik';
import submit from './utils/submit';
import validate from './utils/validate';

const CommentForm = ({ setAddedComments }) => {
    return (
        <Formik 
            initialValues={{
                name: '',
                email: '',
                body: ''
            }}
            validate={validate}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(values, { validateForm, resetForm }) => {
                    submit(values, setAddedComments, validateForm, resetForm)
                    }
                }
        >
            <Form className='form'>
                <label htmlFor='name'>Name:</label>
                <Field type='text' name='name' />
                <ErrorMessage name='name' />

                <label htmlFor='email'>Email:</label>
                <Field type='email' name='email' />
                <ErrorMessage name='email' />

                <label htmlFor='body'>Body:</label>
                <Field as="textarea" name='body' />

                <button type='submit'>Submit</button>
                <button type='reset'>Reset</button>
            </Form>
        </Formik>
    );
};

export default CommentForm;