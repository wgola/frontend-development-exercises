import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './components/Form';
import ProductList from './components/ProductsList';

function App() {
  
  const [ products, setProducts ] = useState([]);
  const [ addedProducts, setAddedProducts ] = useState([]);
  const [ deletedProducts, setDeletedProducts ] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(res => setProducts([...res.data, ...addedProducts].filter(product => !deletedProducts.includes(product.id))))
  }, [addedProducts, deletedProducts]);

  return (
    <>
      <Form addedProducts={addedProducts} setAddedProducts={setAddedProducts}/>
      <ProductList products={products} setDeletedProducts={setDeletedProducts} />
    </>
  );
}

export default App;
