import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './userRegister.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserRegisterPage = () => {

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    contact:"",
    password:"",
    image:"",
    cpassword:""
  })

  const navigate = useNavigate()

  const handleChange = (e)=>{
    setFormData((prevformdata)=>({
      ...prevformdata,
      [e.target.name]:e.target.value
    }))
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/register',formData)
      if(response){
        navigate('/login')
        setFormData({
          name: '',
          email: '',
          contact: '',
          password: '',
          cpassword: '',
          image:''
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  console.log(formData)

  return (
    <div className='register-container'>
      <form className='register' onSubmit={handleSubmit}>
        <div className='register-div'>
          <input type='text' placeholder='Name' name='name' value={formData.name} onChange={handleChange}/>
        </div>
        <div className='register-div'>
          <input type='text' placeholder='Email' name='email' value={formData.email} onChange={handleChange}/>
        </div>
        <div className='register-div'>
          <input type='text' placeholder='Contact' name='contact' value={formData.contact} onChange={handleChange}/>
        </div>
        <div className='register-div'>
          <input type='password' placeholder='Password' name='password' value={formData.password} onChange={handleChange}/>
        </div>
        <div className='register-div'>
          <input type='password' placeholder='confirm Password' name='cpassword' value={formData.cpassword} onChange={handleChange}/>
        </div>
        <div className='register-div'>
          <input type='file' placeholder='Add a file' name='image' value={formData.image} onChange={handleChange}/>
        </div>
        <div className='register-div button'>
          <div>
            <Button variant='primary' className='btn' type='submit'>
              Submit
            </Button>
          </div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserRegisterPage;


