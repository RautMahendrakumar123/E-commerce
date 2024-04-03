import React, { useEffect } from 'react';
import './cartpage.css';
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeProduct } from '../../store/cartSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';

const Cartpage = () => {
  const token = localStorage.getItem('token');
  const cart_data = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const CheckoutPrice = cart_data.reduce((acc, curr) => acc + parseInt(curr.total), 0);
  const CheckoutQuantity = cart_data.reduce((acc, curr) => acc + parseInt(curr.quantity), 0);

  useEffect(() => {
    if (!token) {
      toast.error('Please login first');
    }
  }, [token]);

  const handlePayment = async () => {
    try {
      const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
      const res = await axios.post('http://localhost:5000/api/v1/create-checkout-session', cart_data);

      if (res.status === 200) {
        toast.info('Redirecting to the payment gateway...');
        stripePromise.redirectToCheckout({ sessionId: res.data.sessionId });
      } else {
        throw new Error('Failed to initiate payment');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to initiate payment');
    }
  };

  return (
    <div style={{ padding: '20px 10px' }}>
      <div className='cart-container'>
        <div className='product-container'>
          {cart_data.length > 0 ? (
            cart_data.map((prod) => (
              <div className='cart-product' key={prod._id}>
                <div className='cart-img-container'>
                  <img src={`http://localhost:5000/uploads/${prod.image}`} alt={prod.name} />
                </div>
                <div className='cart-info'>
                  <div>{prod.name}</div>
                  <div>Rs {prod.price}</div>
                  <div>Item: {prod.quantity}</div>
                  <div style={{ paddingBottom: '5px' }}>
                    <button className='btn btn-primary small-btn' onClick={() => dispatch(increaseQuantity(prod._id))}>+</button>
                    <button className='btn btn-primary small-btn' onClick={() => dispatch(decreaseQuantity(prod._id))}>-</button>
                  </div>
                </div>
                <div className='cart-total'>
                  <div className='delete-icon' onClick={() => dispatch(removeProduct(prod._id))}>Delete (<MdDelete />)</div>
                  <div>Total: Rs {prod.total}</div>
                </div>
              </div>
            ))
          ) : (
            <div className='empty-cart-container'>
              <div className='empty-cart-img'>
                <img src='https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png' alt='empty cart' />
              </div>
              <div>Cart is empty</div>
            </div>
          )}
        </div>
        <div className='price-container'>
          <div>
            <div className='cart-checkout middle'>Payment Details</div>
            <div className='cart-totalItem middle'>Item : {CheckoutQuantity}</div>
            <hr />
            <div className='cart-totalPrice middle'>Total : {CheckoutPrice}</div>
            <hr />
            {token && (
              <div className='middle'>
                <button className={`btn btn-primary`} disabled={CheckoutPrice===0} onClick={handlePayment}>Checkout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
