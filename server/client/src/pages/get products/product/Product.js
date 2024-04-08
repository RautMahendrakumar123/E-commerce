import React, { useEffect } from 'react';
import './Product.css';
import axios from 'axios';
import {toast} from 'react-toastify'
import { Link } from 'react-router-dom';

const Product = ({ data }) => {


  const handleProductDelete = async(productId)=>{
    console.log(productId)
    try {
      await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/v1/product/delete/${productId}`)
      console.log('product deleted')
      toast.success('product deleted')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="product">
      <img src={`http://localhost:5000/uploads/${data.image}`} alt="Product" />
      <div className="product-info">
        <div>{data.productname}</div>
        <div>{data.category}</div>
        <div>{data.price}</div>
        <div className="description">{data.desc}</div>
        <div>Special:{data.special}</div>
        <Link to={`/dashboard/update/${data._id}`} >
        <button>update</button>
        </Link>
        <button onClick={()=>handleProductDelete(data._id)}>delete</button>
      </div>
    </div>
  );
};

export default Product;


