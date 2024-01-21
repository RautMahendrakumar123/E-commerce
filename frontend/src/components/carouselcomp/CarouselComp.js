import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from '../card/ProductCard';


const CarouselComp = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 880 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 880, min: 512 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 512, min: 0 },
          items: 1
        }
      };
  return (
    <div>
      <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        >
  <div><ProductCard /></div>
  <div><ProductCard /></div>
  <div><ProductCard /></div>
  <div><ProductCard /></div>
  <div><ProductCard /></div>
  <div><ProductCard /></div>
  <div><ProductCard /></div>
  <div><ProductCard /></div>
</Carousel>
    </div>
  )
}

export default CarouselComp
