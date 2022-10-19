const DateInput = (props) => {
    
    return (
        <div id="dateInput">
            Data: <input type="date" onChange={(event) => props.setDate(event.target.value)} value={props.date} />
        </div>
    );
}

export default DateInput;