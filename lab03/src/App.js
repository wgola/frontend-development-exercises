import { useState } from "react";
import Form from "./components/Form";

const App = () => {

    const [ taskList, setTaskList ] = useState([]);

    return (
        <div>
            <div>Lista zadań: </div>
            <ol>
                {taskList.map(n => <li>{n}</li>)}
            </ol>
            <Form taskList={taskList} setTaskList={setTaskList} />
        </div>
    );
}

export default App;