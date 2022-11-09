import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

const App = () => {
    const [ addedComments, setAddedComments ] = useState([]);
    
    return (
        <div className="main">
            <CommentForm setAddedComments={setAddedComments} />
            <CommentsList addedComments={addedComments} />
        </div>
    )
};

export default App;