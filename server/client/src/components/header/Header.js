import React, { useState } from 'react';
import { FaShopify } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './header.css';
import { Link, json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../store/userSlice';
import Search from '../search/Search';
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'

const Header = () => {
  const [user, setUser] = useState({})
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(state => state.cart)
  const token = localStorage.getItem('token')
  if (token) {
    const decode = jwtDecode(token)
    const id = decode.userId
    const getUser = async () => {
      const response = await axios.get(`http://localhost:5000/api/v1/getuser/${id}`)
      setUser(response.data)
    }
    getUser()
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(remove())
    setTimeout(() => {
      navigate('/')
    }, 1000);
  }

  return (
    <div className='header-div'>
      <Navbar expand='lg'>
        <Container fluid>
          <Link to="/" style={{ textDecoration: 'none' }}><Navbar.Brand className='text-white'>
            <FaShopify style={{ fontSize: '24px' }} /> Shopper
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <>
              <Search />
            </>
            {
              !localStorage.getItem('token') ?
                <>
                  <Nav className='ms-auto mb-2'>
                    <Link to="/login"><Button variant='primary' className='btn loginbtn'>Login</Button></Link>
                  </Nav>
                </>
                :
                <>
                  <Nav className='ms-auto'>
                    <NavDropdown title={user.name} id='navbarScrollingDropdown' style={{ color: 'white', marginRight: '20px' }}>

                      <NavDropdown.Item><Link to="/profile" style={{ textDecoration: 'none' }}><CgProfile /> Profile </Link></NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={handleLogout}><AiOutlineLogout />  Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link to="/cart" className='text-white cart' style={{ textDecoration: 'none' }}>Cart <PiShoppingCartFill /><span className='count'>{data.length ? data.length : 0}</span></Link></Nav.Link>
                  </Nav>
                </>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
