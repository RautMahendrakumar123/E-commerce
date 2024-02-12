import React from 'react'
import './cartpage.css'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeProduct } from '../../store/cartSlice';

const Cartpage = () => {

  const cart_data = useSelector(state => state.cart)
const dispatch = useDispatch()

const CheckoutPrice = cart_data.reduce((acc,curr)=>acc + parseInt(curr.total),0)
const CheckoutQuantity = cart_data.reduce((acc,curr)=>acc + parseInt(curr.quantity),0)

  return (
    <div style={{ padding: '20px 10px' }}>
      <div className='cart-container'>
        <div className='product-container'>

          {
            cart_data.length > 0 ?
              cart_data.map((prod) => {
                return <div className='cart-product' key={prod._id}>
                  <div className='cart-img-container'>
                    <img src={`http://localhost:5000/uploads/${prod.image}`} />
                  </div>
                  <div className='cart-info'>
                    <div>{prod.name}</div>
                    <div>
                      <div>Rs {prod.price}</div>
                    </div>
                    <div>item:{prod.quantity}</div>
                    <div style={{ paddingBottom: '5px' }}>
                      <button type="button" class="btn btn-primary small-btn"
                      onClick={()=>{dispatch(increaseQuantity(prod._id))}}>+</button>

                      <button type="button" class="btn btn-primary small-btn"
                      onClick={()=>{dispatch(decreaseQuantity(prod._id))}}>-</button>
                    </div>
                  </div>
                  <div className='cart-total'>
                    <div className='delete-icon' onClick={()=>{dispatch(removeProduct(prod._id))}}>delete(<MdDelete />)</div>
                    <div>Total:Rs {prod.total}</div>
                  </div>
                </div>
              })
              : <>Please add product</>
          }
        </div>
        <div className='price-container'>
          <div>
            <div className='cart-checkout middle'>Checkout</div>
            <div className='cart-totalItem middle'>Item : {CheckoutQuantity}</div>
            <hr/>
            <div className='cart-totalPrice middle'>Total : {CheckoutPrice}</div>
            <hr/>
            <div className='middle'><button className='btn btn-primary'>Payment</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartpage

