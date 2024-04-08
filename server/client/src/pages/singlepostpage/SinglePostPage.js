import React, { useEffect, useState } from 'react';
import './singlepost.css';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addProduct } from '../../store/cartSlice';
import axios from 'axios'
import { toast } from 'react-toastify';

const SinglePostPage = () => {
  const { productId } = useParams()
  const [data,setData]=useState({})

  const token = localStorage.getItem('token')
  const dispatch = useDispatch()

  useEffect(()=>{
    const getProduct = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/product/${productId}`)
        if(response){
          setData(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  },[productId])
  console.log(data)

  const AddCart = (e)=>{
    if(token){
      dispatch(addProduct({
        _id:data._id,
        name:data.productname,
        price:data.price,
        category:data.category,
        image: data.image
      }))
    }else{
      toast.error('Please Login')
      console.log('please login')
    }
  }
 
  return (
    <div className='main-container'>
      <div className='left-container'>
        <div className='img-container-singlepost'>
          <img src={`http://localhost:5000/uploads/${data.image}`} alt={data.productname} />
        </div>
      </div>
      <div className='right-container'>
        <div className='title'>{data.productname}</div>
        <div className='desc'>{data.desc}</div>
        <div className='price'>Rs. {data.price}</div>
        <div><Button variant="primary" className='btn' onClick={AddCart}>Add to Cart</Button></div>
      </div>
    </div>
  );
};

export default SinglePostPage;
