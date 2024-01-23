import React, { useState } from 'react'
import './login.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((prevformdata) => ({
      ...prevformdata,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/login', formData)
      if (response) {
        navigate('/')
        setFormData({
          email: '',
          password: ''
        })
      }
    } catch (error) {
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