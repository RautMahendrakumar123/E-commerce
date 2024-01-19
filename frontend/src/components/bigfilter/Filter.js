import React from 'react'
import './filter.css'

const FilterList = [
    {
        img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/38a459d6d1fc930a.png?q=100",
        title: "Mobiles and tablet"
    },
    {
        img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/629b0a6f61037ae6.png?q=100",
        title: "TV and Electronics"
    },
    {
        img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/f2802fac96dffea9.png?q=100",
        title: "Sports"
    },
    {
        img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/38a459d6d1fc930a.png?q=100",
        title: "Mens"
    },
    {
        img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/38a459d6d1fc930a.png?q=100",
        title: "Womens"
    },
    {
        img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/38a459d6d1fc930a.png?q=100",
        title: "sports"
    },
]

const Filter = () => {
    return (
        <div className='main-container'>
            <div className='container'>
                <div></div>
                {/* <div className='filter-card'>
                    <div><img src='https://rukminim1.flixcart.com/fk-p-flap/80/80/image/38a459d6d1fc930a.png?q=100' /></div>
                    <div>Mobiles and Tablets</div>
                </div> */}
                {
                    FilterList.map((item)=>(
                        <div className='filter-card'>
                    <div><img src={item.img} /></div>
                    <div>{item.title}</div>
                </div>
                    ))
                }

                <div></div>
            </div>
        </div>
    )
}

{/* <div>TV and Electronics</div>
<div>sport</div>
<div>Mens wear</div>
<div>womens wear</div>
<div>books</div> */}

export default Filter
