import React from 'react'
import './card.css'


     {/* https://images.pexels.com/photos/733860/pexels-photo-733860.jpeg */}

      {/* https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&w=600 */}

const ProductCard = () => {
  return (
    <div className='card'>
      <img src='https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
      <p>Title</p>
      <div className='card-prices'>price:50rs</div>
      <button className='btn'>Add to Cart</button>
    </div>
  )
}

export default ProductCard
