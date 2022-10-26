import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
  }, [])

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <p>{product.id}</p>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
