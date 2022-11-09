const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Field required!';
    } else if (values.name.length < 2) {
        errors.name = 'Field must be longer than 1!';
    } else if (values.name.length > 20) {
        errors.name = 'Field must be shorter than 20!';
    };

    if (!values.email) {
        errors.email = 'Field required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Use correct email!';
    };

    return errors;
};

export default validate;