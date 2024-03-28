import React, { useEffect, useState } from 'react';
import BootstrapSpinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';

const RedirectSpinner = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((pre) => --pre);
        }, 1000);

        count === 0 && navigate('/');

        return () => clearInterval(interval);
    }, [count, navigate]);

    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{height:'90vh'}}>
            <h2>Redirecting back in {count} seconds...</h2>
            <BootstrapSpinner animation="border" variant="danger" />
        </div>
    );
};

export default RedirectSpinner;
