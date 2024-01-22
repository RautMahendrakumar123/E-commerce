import React from 'react';
import './singlepost.css';
import Button from 'react-bootstrap/Button';

const SinglePostPage = () => {
  return (
    <div className='main-container'>
      <div className='left-container'>
        <div className='img-container'>
          <img src='https://images.pexels.com/photos/345415/pexels-photo-345415.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        </div>
      </div>
      <div className='right-container'>
        <div className='title'>Nike Air</div>
        <div className='desc'>Nike Air is a technology developed by Nike that consists of pressurised air inside a tough yet flexible bag, providing more flexibility and spring without compromising structure. Nike Air shoes are designed to provide responsive support, reduce impact, and keep the shoe snug and lightweight.</div>
        <div className='price'>$5000</div>
        <div><Button variant="primary" className='btn'>Add to Cart</Button></div>
      </div>
    </div>
  );
};

export default SinglePostPage;
