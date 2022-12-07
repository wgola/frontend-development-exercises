import { Field } from 'formik';

const DaysSelect = ({ name }) => {
    const values = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    return ( 
        <Field as="select" name={name}>
            <option value="">Choose day</option>
            {values.map(value => <option value={value}>{value}</option>)}
        </Field>
    )
}

export default DaysSelect;