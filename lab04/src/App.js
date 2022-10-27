import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './components/Form';
import ProductList from './components/ProductsList';

function App() {
  
  const [ products, setProducts ] = useState([]);
  const [ addedProducts, setAddedProducts ] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(res => setProducts([...res.data, ...addedProducts]))
  }, [addedProducts])

  return (
    <>
      <Form />
      <ProductList products={products} />
    </>
  );
}

export default App;
