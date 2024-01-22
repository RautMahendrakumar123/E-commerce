import React from 'react'
import './card.css'
import Button from 'react-bootstrap/Button';


     {/* https://images.pexels.com/photos/733860/pexels-photo-733860.jpeg */}

      {/* https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&w=600 */}

const ProductCard = () => {
  return (
    <div className='card'>
      <img src='https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
      <p>Title</p>
      <div className='card-prices'>price:50rs</div>
      <div><Button variant="primary" className='btn'>Add to Cart</Button></div>
    </div>
  )
}

export default ProductCard
