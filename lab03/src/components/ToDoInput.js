const ToDoInput = (props) => {

    return (
        <div id="toDoInput">
            Zadanie: <input id="task" type="text" onChange={(event) => props.setTask(event.target.value)} value={props.task} />
        </div>
    );
}

export default ToDoInput;