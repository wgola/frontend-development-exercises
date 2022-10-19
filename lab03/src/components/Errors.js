const Errors = (props) => {

    return (
        <div id="errors">
            <p>{props.taskError}</p>
            <p>{props.dateError}</p>
        </div>
    );
}

export default Errors;