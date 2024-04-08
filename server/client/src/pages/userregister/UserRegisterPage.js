import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './userRegister.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData((prevformdata) => ({
        ...prevformdata,
        [e.target.name]: e.target.files[0],
      }));
    } else {
      setFormData((prevformdata) => ({
        ...prevformdata,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('contact', formData.contact);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('cpassword', formData.cpassword);
    formDataToSend.append('image', formData.image);

      const response = await axios.post('http://localhost:5000/api/v1/register',formDataToSend,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if(response){
        toast.success('Registered Successfully')
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
      toast.error('Something Went Wrong')
      console.log(error)
    }
  }


  return (
    <div className='register-container'>
      <form className='register' onSubmit={handleSubmit}  encType="multipart/form-data">
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
          <input type='file' placeholder='Add a file' name='image' onChange={handleChange}/>
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


