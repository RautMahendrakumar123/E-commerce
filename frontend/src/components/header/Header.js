import React from 'react';
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
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { remove } from '../../store/userSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLogout = ()=>{
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
          <Link to="/" style={{ textDecoration: 'none' }}><Navbar.Brand  className='text-white'>
          <FaShopify style={{fontSize:'24px'}}/> Shopper
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Form className='d-flex' style={{ width: '40%' }}>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
            </Form>
            {
              !localStorage.getItem('token') ?
              <>
              <Nav className='ms-auto'>
               <Link to="/login"><Button variant='primary' className='btn loginbtn'>Login</Button></Link>
               </Nav>
              </> 
              :
              <>
              <Nav className='ms-auto'>
              <NavDropdown title="Mahendrakumar" id='navbarScrollingDropdown' style={{ color: 'white' }}>
              
                <NavDropdown.Item><Link to="/profile" style={{ textDecoration: 'none' }}><CgProfile /> Profile </Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}><AiOutlineLogout />  Logout</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link><Link to="/cart"  className='text-white cart' style={{ textDecoration: 'none' }}>Cart <PiShoppingCartFill /><span className='count'>5</span></Link></Nav.Link>
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
