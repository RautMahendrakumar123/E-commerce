import React from 'react';
import { SiFlipkart } from 'react-icons/si';
import { PiShoppingCartFill } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiCardboardBoxClosed } from "react-icons/gi";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header-div'>
      <Navbar expand='lg'>
        <Container fluid>
          <Link to="/" style={{ textDecoration: 'none' }}><Navbar.Brand  className='text-white'>
            <SiFlipkart style={{ fontSize: '24px' }} /> Flipkart
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
            <Nav className='ms-auto'>
              <NavDropdown title="Mahendrakumar" id='navbarScrollingDropdown' style={{ color: 'white' }}>
              
                <NavDropdown.Item><Link to="/profile" style={{ textDecoration: 'none' }}><CgProfile /> Profile </Link></NavDropdown.Item>
               <NavDropdown.Item><Link to="/order" style={{ textDecoration: 'none' }}><GiCardboardBoxClosed /> Orders</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><AiOutlineLogout />  Logout</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link><Link to="/cart"  className='text-white' style={{ textDecoration: 'none' }}>Cart <PiShoppingCartFill /></Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
