import axios from "axios";

const addProduct = (setAddedProduct, newProduct) => {
    axios
        .post("https://fakestoreapi.com/products", newProduct)
        .then(response => {
            if (response.status === 200) {
                const addedProduct = response.data;
                setAddedProduct(addedProducts => {
                    addedProduct.id += addedProducts.length;
                    return [...addedProducts, addedProduct];
                });
            } else console.log(response.status);
        })
        .catch(error => console.log(error));
}

export default addProduct;