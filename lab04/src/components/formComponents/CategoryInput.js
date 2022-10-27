const CategoryInput = ({category, setCategory}) => {
    return (
        <p>
            Category: 
            <input type="text" value={category} onChange={event => setCategory(event.target.value)} />
        </p>
    )
};

export default CategoryInput;