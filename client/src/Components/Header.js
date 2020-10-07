import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg='light'>
      <Navbar.Brand href='/'>
        <h3 className='primary-text my-4 ml-4'>
          <strong>SmallURL</strong>
        </h3>
      </Navbar.Brand>
      <Nav className='ml-auto mr-4 my-4'>
        <Nav.Link href='/login'>Login</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
