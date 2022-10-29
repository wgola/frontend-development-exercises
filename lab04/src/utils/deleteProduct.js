import axios from "axios"

const deleteProduct = (setDeletedProducts, productId) => {
    axios
        .delete(`https://fakestoreapi.com/products/${productId}`)
        .then(res => setDeletedProducts(deletedProducts => [...deletedProducts, productId]))
        .catch(err => console.log(err))
};

export default deleteProduct;