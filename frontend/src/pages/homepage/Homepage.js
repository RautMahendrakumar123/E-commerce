import React from 'react'
import './homepage.css'
import Filter from '../../components/bigfilter/Filter'
import CarouselComp from '../../components/carouselcomp/CarouselComp'
import Allproduct from '../../components/allproduct/Allproduct'
import { useSelector } from 'react-redux'
import SearchResult from '../searchresult/SearchResult'

const Homepage = () => {
  
const data = useSelector(state=>state.searchProduct)

  return (
    <div className='home-container'>
      <div>
      <Filter />
      </div>
      <div>
      <CarouselComp />
      </div>
      <div>
        {
          data.length>0 ? <SearchResult />:<Allproduct />
        }
        
      </div>
      
    </div>
  )
}

export default Homepage
