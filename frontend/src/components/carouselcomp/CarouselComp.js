import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from '../card/ProductCard';
import axios from 'axios';


const CarouselComp = () => {
  const [specialProducts,setSpecialProducts] = useState([])

  useEffect(()=>{
        const FetchSpecialProduct = async()=>{
          try {
            const response = await axios.get('http://localhost:5000/api/v1/products/special/true')
            setSpecialProducts(response.data.products)
          } catch (error) {
            console.log(error)
          }
        }
        FetchSpecialProduct()
  })

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
    <div style={{width:'90%', margin:'0 auto'}}>
      <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        >
          <div>
            {
              specialProducts.map((product)=>{
                <ProductCard product={product} key={product._id}/>
              })
            }
          </div>
</Carousel>
    </div>
  )
}

export default CarouselComp
