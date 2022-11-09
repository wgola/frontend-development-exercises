import { useEffect, useState } from "react";
import axios from 'axios';
import lodash from 'lodash';

const CommentsList = ({ addedComments }) => {
    
    const [ comments, setComments ] = useState([]);
    
    useEffect(() => {
        setComments(oldComments => [...addedComments, ...oldComments]);
        axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            if (res.status === 200) {
                setComments(oldComments => [
                    ...oldComments, 
                    ...res.data.filter(comment => !oldComments.some(oldComment => lodash.isEqual(comment, oldComment)))
                ])
            } else console.log(res.status);
        })
        .catch(err => console.log(err));
    }, [addedComments]);

    return (
        <div className="comments">
            <ul>
                {comments.map(comment => <li key={comment.postId + "-" + comment.id}>Email: {comment.email}; name: {comment.name}</li>)}
            </ul>
        </div>
    )
};

export default CommentsList;