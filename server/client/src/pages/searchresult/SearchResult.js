import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../components/card/ProductCard'
import './searchresult.css'

const SearchResult = () => {
    const searchProducts = useSelector(state=>state.searchProduct)
  return (
    <div className='searchProduct-container'>
      {
        searchProducts.map((product)=>{
           return <ProductCard key={product._id} product={product} />
        })
      }
    </div>
  )
}

export default SearchResult
