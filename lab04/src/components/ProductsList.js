import deleteProduct from "../utils/deleteProduct";

const ProductList = ({products, setDeletedProducts}) => {
    return (
        <div id="products">
            <h3>Products list: </h3>
            {products.map(product => (
                <div key={product.id} className="product">
                    <p>{product.id}. {product.title}</p>
                    <div className="description">
                        <p>Price: {product.price}</p>
                        <p>Category: {product.category}</p>
                        <button onClick={() => deleteProduct(setDeletedProducts, product.id)}>DELETE</button>
                    </div>
                </div>
            ))}
        </div>    
    );
};

export default ProductList;