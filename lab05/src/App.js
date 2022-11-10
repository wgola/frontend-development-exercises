import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

const App = () => {
    const [ addedComments, setAddedComments ] = useState([]);
    const [ submitting, setSubmitting ] = useState(false);

    return (
        <div className="main">  
            <CommentForm setAddedComments={setAddedComments} setSubmitting={setSubmitting} submitting={submitting} />
            {submitting ? <div className="loading">Loading...</div> : null}
            <CommentsList addedComments={addedComments} />
        </div>
    )
};

export default App;