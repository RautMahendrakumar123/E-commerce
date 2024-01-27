
import React from 'react'
import './profile.css'
import profileimage from '../../image/noavatar.png'
import {useSelector} from 'react-redux'

const ProfilePage = () => {
 const user_data = useSelector((state)=>state.user)
  

  return (
    <div className='profile-page'>
      <div className='profile-container'>
        <div className='image-container'>
          <img src={user_data.image?`http://localhost:5000/uploads/${user_data.image}`:profileimage} alt='profile'/>
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
    </div>
  )
}

export default ProfilePage
