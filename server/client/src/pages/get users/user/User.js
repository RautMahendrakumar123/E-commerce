import React, { useEffect } from 'react'
import './user.css'
import axios from 'axios';

const User = ({userdata}) => {
  const {name,contact,email,image,_id} = userdata;

  const handleDelete = async (userId) => {
    try {
        const response = await axios.delete(`https://e-commerce-jr9j.onrender.com/api/v1/deleteuser/${userId}`);
        console.log('User deleted:', response.data);
    } catch (error) {
        // Handle error
        console.error('Error deleting user:', error);

    }
};

useEffect(()=>{

},[userdata.length!==userdata.length])

  return (
    <div className='userContainer'>
      <div className='imgContainer'><img src={`https://e-commerce-jr9j.onrender.com/uploads/${image}`} alt='image' />
      </div>
      <div>{name}</div>
      <div>{contact}</div>
      <div>{email}</div>
      <button onClick={()=>handleDelete(_id)}>delete</button>
    </div>
    
  )
}

export default User
