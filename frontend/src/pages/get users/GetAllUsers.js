import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './user/User'
import './alluser.css'

const GetAllUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/getUsers')
        if (response) {
          setUsers(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [])
  console.log(users)
  return (
    <div className='AlluserContainer'>
      {
        users && users.map((user)=>{
          return <>
            <User userdata = {user}/>
          </>
        })
      }

    </div>
  )
}

export default GetAllUsers
