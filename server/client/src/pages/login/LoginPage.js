import React, { useState } from 'react'
import './login.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {include} from '../../store/userSlice';
import {toast} from 'react-toastify'

const LoginPage = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData((prevformdata) => ({
      ...prevformdata,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://e-commerce-jr9j.onrender.com/api/v1/login`, formData)
      if (response) {
        localStorage.setItem('token',response.data.token)
        if(response.data){
          dispatch(include(response))
          toast.success('Login Successfull')
        }
        setTimeout(() => {
          navigate('/')
        }, 1000);
        setFormData({
          email: '',
          password: ''
        })
      }
    } catch (error) {
      toast.error('Something Went Wrong')
      console.log(error)
    }
  }

  return (
    <div className='login-container'>
      <form className='login' onSubmit={handleSubmit}>
        <div className='register-div'>
          <input type='text' placeholder='Email' name='email' value={formData.email} onChange={handleChange}/>
        </div>
        <div className='login-div'>
          <input type='password' placeholder='Password' name='password' value={formData.password} onChange={handleChange}/>
        </div>
        <div className='login-div button'>
          <div>
            <Button variant='primary' className='btn' type='submit'>
              Submit
            </Button>
          </div>
          <div>
            Not Registerd?
            <Link to='/register-user'>Register</Link>
          </div>

          <div>
            Admin?
            <Link to='/register-admin'>AdminRegister</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginPage