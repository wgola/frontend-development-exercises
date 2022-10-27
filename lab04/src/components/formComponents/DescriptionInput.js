const DescriptionInput = ({description, setDescription}) => {
    return (
        <p>
            Description: 
            <input type="text" value={description} onChange={event => setDescription(event.target.value)} />
        </p>
    )
};

export default DescriptionInput;