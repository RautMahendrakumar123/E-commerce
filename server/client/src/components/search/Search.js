import React, { useState } from 'react'
import './search.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addSearchProduct } from '../../store/searchSlice'

const Search = () => {
    const [query,setQuery]=useState('')
    const [searchProducts,setSearchProducts]=useState([])

    const dispatch = useDispatch()

    const fetchProduct = async(value)=>{
       const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/products`)
       if(response && response.data && response.data.products){
        const result = response.data.products.filter((product)=>{
            return value && product && product.productname && product.productname.toLowerCase().includes(value.toLowerCase());
        })
        setSearchProducts(result)
       }
    }

    const handlechange = (value)=>{
        setQuery(value)
        fetchProduct(value)
    }

    dispatch(addSearchProduct(searchProducts))
    console.log(searchProducts)
    return (
        <>
            <form className='search-form'>
                <input type='text' placeholder='Search' className='search-input' value={query} onChange={(e)=>handlechange(e.target.value)}/>
            </form>
            
        </>
    )
}

export default Search
