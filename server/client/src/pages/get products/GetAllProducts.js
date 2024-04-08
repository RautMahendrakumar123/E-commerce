import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './product/Product'
import './getallproduct.css'

const GetAllProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://e-commerce-jr9j.onrender.com/api/v1/allProducts`)
        setProducts(response.data.products)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])
console.log(products)
  return (
    <div className='product-cont'>
      {
        products.map((product)=>{
          return<> <Product key={product.id} data={product}/></>
        })
      }
    </div>
  )
}

export default GetAllProducts
