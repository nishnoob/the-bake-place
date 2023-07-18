import React from 'react';
import './listing.css';
import ProductCard from './ProductCard';
import bakeryData from '../../utils/bakeryData';

const ProductListing = () => {
  return (
    <div className="product-listing">
      {bakeryData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
