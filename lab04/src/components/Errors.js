const Errors = ({errors}) => {
    return (
        <div>
            {errors.map(error => <p key={error.id}>{error.msg}</p>)}
        </div>
    )
};

export default Errors;