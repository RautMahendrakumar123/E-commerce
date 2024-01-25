import React from 'react'
import './cartpage.css'
import { MdDelete } from "react-icons/md";

const Cartpage = () => {
  return (
    <div style={{ padding: '20px 10px' }}>
      <div className='cart-container'>
        <div className='product-container'>
          <div className='cart-product'>
            <div className='cart-img-container'>
              <img src='https://cdn.dummyjson.com/product-images/8/thumbnail.jpg' />
            </div>
            <div className='cart-info'>
              <div>samsung</div>
              <div>
                <div>Rs 250</div>
              </div>
              <div>item:2</div>
              <div style={{ paddingBottom: '5px' }}>
              <button type="button" class="btn btn-primary small-btn">+</button>
              <button type="button" class="btn btn-primary small-btn">-</button>
              </div>
            </div>
            <div className='cart-total'>
              <div className='delete-icon'>delete(<MdDelete />)</div>
              <div>Total:Rs 500</div>
            </div>
          </div>
      


          <div className='cart-product'>
            <div className='cart-img-container'>
              <img src='https://cdn.dummyjson.com/product-images/8/thumbnail.jpg' />
            </div>
            <div className='cart-info'>
              <div>samsung</div>
              <div>
                <div>Rs 250</div>
              </div>
              <div>item:2</div>
              <div style={{ paddingBottom: '5px' }}>
              <button type="button" class="btn btn-primary small-btn">+</button>
              <button type="button" class="btn btn-primary small-btn">-</button>
              </div>
            </div>
            <div className='cart-total'>
              <div className='delete-icon'>delete(<MdDelete />)</div>
              <div>Total:Rs 500</div>
            </div>
          </div>
         
        </div>
        <div className='price-container'>
          checkout
        </div>
      </div>
    </div>
  )
}

export default Cartpage
