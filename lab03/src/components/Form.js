import { useState } from "react";
import Date from "./Date";
import Errors from "./Errors";
import ToDo from "./ToDo";

const Form = (props) => {

    const [ task, setTask ] = useState("");
    const [ date, setDate ] = useState("");

    const [ taskError, setTaskError ] = useState("");
    const [ dateError, setDateError ] = useState("");

    const validate = () => {
        if (task === "") {
            setTaskError("Zadanie nie może być puste!")
        } else {
            setTaskError("")
        }
        if (date === "") {
            setDateError("Data nie może być pusta!")
        } else {
            setDateError("")
        }
        if (taskError === "" && dateError === "") {
            addToList();
        }
    }

    const addToList = () => {
        props.setTaskList(props.taskList.concat(task + " " + date));
        setTask("");
        setDate("");
    }

    return (
        <div>
            Formularz:
            <ToDo setTask={setTask} />
            <Date setDate={setDate} />
            <Errors taskError={taskError} dateError={dateError} />
            <button onClick={validate}>Dodaj</button>
        </div>
    );
};

export default Form;