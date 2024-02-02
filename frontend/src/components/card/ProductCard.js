import React from 'react';
import './card.css';


const ProductCard = ({ product }) => {
  if (!product || !product.image) {
    return null; 
  }

  return (
    <div className='card-container'>
            <div className='img-container'>
                <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.productname} />
            </div>
            <div className='text-container'>
                <div>{product.productname}</div>
                <div>Rs. {product.price}</div>
                <button className='card-btn'>Add to Cart</button>
            </div>
        </div>
  );
};

export default ProductCard;
