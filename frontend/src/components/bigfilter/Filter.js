import React from 'react'
import './filter.css'

const FilterList = [

    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100', text: 'Groceries' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', text: 'Mobile' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100', text: 'Fashion' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', text: 'Laptops' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100', text: 'Home' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100', text: 'Beauty and Toys' }
];



const Filter = () => {
    return (
        <div className='container'>
            <div className='filter-card'></div>
            {
                FilterList.map((item) => (
                    <div className='filter-card' key={item.url}>

                        
                            <img src={item.url} className='img'/>
                        {item.text}

                    </div>
                ))
            }

            <div className='filter-card'></div>
        </div>

    )
}

export default Filter
