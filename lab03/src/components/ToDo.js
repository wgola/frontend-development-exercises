const ToDo = (props) => {

    return (
        <div>
            Zadanie: <input id="task" type="text" onChange={(event) => props.setTask(event.target.value)}/>
        </div>
    )
}

export default ToDo;