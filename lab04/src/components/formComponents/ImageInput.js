const ImageInput = ({image, setImage}) => {
    return (
        <p>
            Image:
            <input type="text" value={image} onChange={event => setImage(event.target.value)} />
        </p>
    )
};

export default ImageInput;