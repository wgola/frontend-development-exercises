import { useState } from "react";
import Errors from "./Errors";
import CategoryInput from "./formComponents/CategoryInput";
import DescriptionInput from "./formComponents/DescriptionInput";
import ImageInput from "./formComponents/ImageInput";
import PriceInput from "./formComponents/PriceInput";
import RatingInput from "./formComponents/RatingInput";
import TitleInput from "./formComponents/TitleInput";

const Form = () => {

    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ image, setImage ] = useState("");
    const [ rate, setRate ] = useState("");
    const [ count, setCount ] = useState("");
    const [ errors, setErrors ] = useState([]);

    return (
        <div>
            <h3>Add new product: </h3>
            <TitleInput title={title} setTitle={setTitle} />
            <PriceInput price={price} setPrice={setPrice} />
            <DescriptionInput description={description} setDescription={setDescription} />
            <CategoryInput category={category} setCategory={setCategory} />
            <ImageInput image={image} setImage={setImage} />
            <RatingInput rate={rate} count={count} setRate={setRate} setCount={setCount} />
            <button>SUBMIT</button>
            <Errors />
        </div>
    )
};

export default Form;