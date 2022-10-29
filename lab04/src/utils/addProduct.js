import axios from "axios";

const addProduct = (setAddedProduct, newProduct) => {
    axios
        .post("https://fakestoreapi.com/products", newProduct)
        .then(response => {
            const addedProduct = response.data;
            setAddedProduct(addedProducts => {
                addedProduct.id += addedProducts.length;
                return [...addedProducts, addedProduct];
            })
        })
        .catch(error => console.log(error))
}

export default addProduct;