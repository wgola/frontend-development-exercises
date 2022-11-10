import axios from "axios";
import randomInt from "./randomInt";

const submit = (values, setAddedComments, setSubmitting, validateForm, resetForm) => {
    validateForm();
    const newComment = {...values};
    newComment.id = randomInt();
    newComment.postId = randomInt();
    axios
    .post("https://jsonplaceholder.typicode.com/comments", newComment)
    .then(res => {
        if (res.status === 201) {
            resetForm();
            setAddedComments(comments => [...comments, res.data]);
            setSubmitting(false);
        } else console.log(res.status);
    })
    .catch(err => console.log(err));
};

export default submit;