import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../components/card/ProductCard'
import './filterresult.css'

const FilterResult = () => {
  const filterProducts = useSelector(state=>state.filterProduct)
  console.log(filterProducts)
  return (
    <div className='filterProduct-container'>
       {
       filterProducts ? filterProducts.map((product)=>{
           return <ProductCard key={product._id} product={product} />
        }) : <>NO such product exist</>
      }

    </div>
  )
}

export default FilterResult
