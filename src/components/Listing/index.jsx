import React, { useEffect, useState } from 'react';
import './listing.css';
import ProductCard from './ProductCard';

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
              setProducts(json);
            })
  }, []);

  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
