import { useState } from "react";
import DateInput from "./DateInput";
import Errors from "./Errors";
import ToDoInput from "./ToDoInput";

const Form = (props) => {

    const [ task, setTask ] = useState("");
    const [ date, setDate ] = useState("yyyy-mm-dd");

    const [ taskError, setTaskError ] = useState("");
    const [ dateError, setDateError ] = useState("");

    const validateTask = () => {
        if (task === "") {
            setTaskError("Zadanie nie może być puste!");
            return false;
        } else {
            setTaskError("");
            return true;
        };
    };

    const validateDate = () => {
        if (date === "yyyy-mm-dd") {
            setDateError("Data nie może być pusta!");
            return false;
        } else {
            const dateFromInput = new Date(date);
            const today = new Date();
            if (dateFromInput <= today) {
                setDateError("Data musi być późniejsza niż dzisiaj!");
                return false;
            } else {
                setDateError("");
                return true;
            }; 
        };
    };

    const validate = () => {
        const taskValidatedCorrectly = validateTask();
        const dateValidatedCorrectly = validateDate();
        if (taskValidatedCorrectly && dateValidatedCorrectly) {
            addToList();
        };
    };

    const addToList = () => {
        props.setTaskList(props.taskList.concat(date + ": " + task));
        setTask("");
        setDate("yyyy-mm-dd");
    };

    return (
        <div id="form">
            Formularz:
            <ToDoInput setTask={setTask} task={task} />
            <DateInput setDate={setDate} date={date} />
            <button id="add" onClick={validate}>Dodaj</button>
            <Errors taskError={taskError} dateError={dateError} />
        </div>
    );
};

export default Form;