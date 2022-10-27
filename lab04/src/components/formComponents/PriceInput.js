const PriceInput = ({price, setPrice}) => {
    return (
        <p>
            Price: 
            <input type="number" value={price} onChange={event => setPrice(event.target.value)} />
        </p>
    )
};

export default PriceInput;