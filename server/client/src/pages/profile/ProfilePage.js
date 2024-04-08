
import React, { useEffect, useState } from 'react'
import './profile.css'
import profileimage from '../../image/noavatar.png'
import { Link } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'

const ProfilePage = () => {
  const [user,setUser]=useState({})

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      const decode = jwtDecode(token)
      const id = decode.userId

      const getUser = async ()=>{
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/getuser/${id}`)
        setUser(response.data)
      }
      getUser()
    }
  },[])

  return (
    <div className='profile-page'>
      <div className='profile-container'>
        <div className='image-container'>
          <img src={user.image? `http://localhost:5000/uploads/${user.image}` : profileimage} alt='profile' />
        </div>
        <div className='usertext-container'>
          <p className='profile-subtext'>name :</p>
          <h5 className='profile-text'>{user.name}</h5>
          <p className='profile-subtext'>contact :</p>
          <p className='profile-text'> {user.contact}</p>
          <p className='profile-subtext'>email :</p>
          <p className='profile-text'>{user.email}</p>
        </div>
      </div>
      { user.role===1 && <div className='private-btns'>
        <div>
          <Link to='/dashboard/getusers'>
            <button className='private-btn'>Get all Users</button>
          </Link>
        </div>
        <div>
          <Link to='/dashboard/upload'>
            <button className='private-btn'>Upload products</button>
          </Link>
        </div>
        <div>
          <Link to='/dashboard/getproducts'>
            <button className='private-btn'>Get all Products</button>
          </Link>
        </div>
      </div>}
    </div>
  )
}

export default ProfilePage
