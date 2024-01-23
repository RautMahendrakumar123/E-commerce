import React from 'react'
import './homepage.css'
import Filter from '../../components/bigfilter/Filter'
import CarouselComp from '../../components/carouselcomp/CarouselComp'
import Allproduct from '../../components/allproduct/Allproduct'

const Homepage = () => {
  return (
    <div className='home-container'>
      <div>
      <Filter />
      </div>
      <div>
      <CarouselComp />
      </div>
      <div>
        <Allproduct />
      </div>
      
    </div>
  )
}

export default Homepage
