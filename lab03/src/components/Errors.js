const Errors = (props) => {
    return (
        <div>
            <p>{props.taskError}</p>
            <p>{props.dateError}</p>
        </div>
    )
}

export default Errors;