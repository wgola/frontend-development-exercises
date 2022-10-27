const RatingInput = ({rate, count, setRate, setCount}) => {
    return (
        <p>
            Rating:
            <p>
                Rate:
                <input type="number" value={rate} onChange={event => setRate(event.target.value)} />
            </p>
            <p>
                Count:
                <input type="number" value={count} onChange={event => setCount(event.target.value)} />
            </p>
        </p>
    )
};

export default RatingInput;