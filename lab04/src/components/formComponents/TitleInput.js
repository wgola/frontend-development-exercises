const TitleInput = ({title, setTitle}) => {
    return (
        <p>
            Title: 
            <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
        </p>
    )
};

export default TitleInput;
