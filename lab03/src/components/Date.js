const Date = (props) => {
    
    return (
        <div>
            Data: <input type="date" onChange={(event) => props.setDate(event.target.value)}/>
        </div>
    )
}

export default Date;