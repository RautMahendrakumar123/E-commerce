
import React from 'react'
import './profile.css'
import profileimage from '../../image/noavatar.png'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const ProfilePage = () => {
  const user_data = useSelector((state) => state.user)


  return (
    <div className='profile-page'>
      <div className='profile-container'>
        <div className='image-container'>
          <img src={user_data.image ? `http://localhost:5000/uploads/${user_data.image}` : profileimage} alt='profile' />
        </div>
        <div className='usertext-container'>
          <p className='profile-subtext'>name :</p>
          <h5 className='profile-text'>{user_data.name}</h5>
          <p className='profile-subtext'>contact :</p>
          <p className='profile-text'> {user_data.contact}</p>
          <p className='profile-subtext'>email :</p>
          <p className='profile-text'>{user_data.email}</p>
        </div>
      </div>
      <div className='private-btns'>
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
      </div>
    </div>
  )
}

export default ProfilePage
