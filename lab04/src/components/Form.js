import { useEffect, useState } from "react";
import addProduct from "../utils/addProduct";
import validator from "../utils/validators";
import Errors from "./Errors";
import CategoryInput from "./formComponents/CategoryInput";
import DescriptionInput from "./formComponents/DescriptionInput";
import ImageInput from "./formComponents/ImageInput";
import PriceInput from "./formComponents/PriceInput";
import TitleInput from "./formComponents/TitleInput";

const Form = ({addedProducts, setAddedProducts}) => {

    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ image, setImage ] = useState("");
    const [ errors, setErrors ] = useState([]);

    useEffect(() => {
        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
        setImage("");
    }, [addedProducts]);

    const onSubmit = () => {
        const validate = validator(setErrors);
        const validatedValues = [
            validate("Title", title),
            validate("Price", price),
            validate("Description", description),
            validate("Category", category),
            validate("Image", image)
        ];
        if (validatedValues.every(x => x)) {
            const newProduct = {
                title: title,
                price: price,
                description: description,
                category: category,
                image: image
            };
            addProduct(setAddedProducts, newProduct);
        };
    };

    return (
        <div id="form">
            <h3>Add new product: </h3>
            <TitleInput title={title} setTitle={setTitle} />
            <PriceInput price={price} setPrice={setPrice} />
            <DescriptionInput description={description} setDescription={setDescription} />
            <CategoryInput category={category} setCategory={setCategory} />
            <ImageInput image={image} setImage={setImage} />
            <button onClick={onSubmit}>SUBMIT</button>
            <Errors errors={errors} />
        </div>
    );
};

export default Form;