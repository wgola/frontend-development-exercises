import axios from "axios";
import randomInt from "./randomInt";

const submit = (values) => {
    const newComment = {...values};
    newComment.id = randomInt();
    newComment.postId = randomInt();
    return new Promise((resolve, reject) => {
        axios
            .post("https://jsonplaceholder.typicode.com/comments", newComment)
            .then(res => res.status === 201 ? resolve(res.data) : reject(res.status))
            .catch(err => reject(err));
    });
};

export default submit;