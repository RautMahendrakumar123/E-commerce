import React, { useState } from 'react'
import './filter.css'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { addFilterProduct } from '../../store/filterSlice';
import { useNavigate } from 'react-router-dom';

const FilterList = [

    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100', text: 'Groceries' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', text: 'Mobile' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100', text: 'Fashion' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', text: 'Laptop' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100', text: 'Home' },
    { url: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100', text: 'Beauty and Toy' }
];



const Filter = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const setClick = async (categoryName) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/products/${categoryName}`);
            dispatch(addFilterProduct(response.data));
            navigate('/filter-result');
        } catch (error) {
            if (error.response && error.response.status === 404) {
                console.log('No products found for category:', categoryName);
            } else {
                console.error('Error fetching products:', error);
            }
        }
    };
    

    return (
        <div className='container'>
            <div className='filter-card'></div>
            {
                FilterList.map((item) => (
                    <div className='filter-card' key={item.url} onClick={()=>{setClick(item.text)}}>
                        <img src={item.url} className='img' />
                        {item.text}
                    </div>
                ))
            }

            <div className='filter-card'></div>
        </div>

    )
}

export default Filter
