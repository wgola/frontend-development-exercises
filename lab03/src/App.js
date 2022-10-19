import { useState } from "react";
import Form from "./components/Form";

const App = () => {

    const [ taskList, setTaskList ] = useState([]);

    const listItems = taskList.map((n, index) => <li key={index}>{n}</li>);

    return (
        <div id="app">
            <div id="taskList">Lista zadań: 
                <ul>
                    {listItems}
                </ul>
            </div>
            <Form taskList={taskList} setTaskList={setTaskList} />
        </div>
    );
}

export default App;