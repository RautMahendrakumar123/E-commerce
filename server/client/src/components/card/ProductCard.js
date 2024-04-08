import React from 'react';
import './card.css';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addProduct } from '../../store/cartSlice';
import {toast} from 'react-toastify'

const ProductCard = ({ product }) => {


  const token = localStorage.getItem('token')
  const dispatch = useDispatch()


  if (!product || !product.image) {
    return null; 
  }


  const AddCart = (e)=>{
    if(token){
      dispatch(addProduct({
        _id:product._id,
        name:product.productname,
        price:product.price,
        category:product.category,
        image: product.image
      }))
    }else{
      toast.error('Please Login')
      console.log('please login')
    }
  }

  return (
    <div className='card-container'>
            <div className='img-container'>
              <Link to={`/singlepost/${product._id}`} >
                <img src={`${process.env.REACT_APP_SERVER_URL}/uploads/${product.image}`} alt={product.productname} />
              </Link>
            </div>
            <div className='text-container'>
            <div style={{padding:'5px'}}>
                <div className='name-product'>{product.productname}</div>
                <div>Rs. {product.price}</div>
            </div>
                <button className='card-btn' onClick={AddCart}>Add to Cart</button>
            </div>
        </div>
  );
};

export default ProductCard;
