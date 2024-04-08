import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import RedirectSpinner from '../components/spinner/Spinner'

const Private = () => {
    const [ok, setOk] = useState(false);
    const token = localStorage.getItem('token')
    useEffect(() => {
        const authCheck = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/user-auth', {
                    headers: {
                        Authorization: token
                    }
                });
                if (response.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                setOk(false);
                console.error('Error during authentication check:', error);
            }
        };
        if(token) authCheck()
    }, [token])
    return (
        <div>
            {
                ok ? <Outlet /> : <RedirectSpinner />
            }
        </div>
    )
}

export default Private
