import React, { useEffect, useState } from 'react';
import './singlepost.css';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const SinglePostPage = () => {
  const { productId } = useParams()
  const [data,setData]=useState({})

  useEffect(()=>{
    const getProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/product/${productId}`)
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
        <div><Button variant="primary" className='btn'>Add to Cart</Button></div>
      </div>
    </div>
  );
};

export default SinglePostPage;
