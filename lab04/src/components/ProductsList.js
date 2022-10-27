const ProductList = ({products}) => {
    return (
        <div>
            <h3>Products list: </h3>
            {products.map(product => (
                <div key={product.id}>
                <p>{product.id}. {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
                </div>
            ))}
        </div>    
    )
};

export default ProductList;