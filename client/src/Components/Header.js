import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../Redux/actions/auth.actions';

const Header = ({ isLoggedIn, logout }) => {
  return (
    <Navbar bg='light'>
      <Navbar.Brand href='/'>
        <h3 className='primary-text my-4 ml-4'>
          <strong>SmallURL</strong>
        </h3>
      </Navbar.Brand>
      {!isLoggedIn ? (
        <Nav className='ml-auto mr-4 my-4'>
          <Nav.Link href='/login'>Login</Nav.Link>
        </Nav>
      ) : (
        <Nav className='ml-auto mr-4 my-4'>
          <Button variant='secondary' onClick={logout}>
            Logout
          </Button>
        </Nav>
      )}
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
