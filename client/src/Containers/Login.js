import React, { Fragment, useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, login } from '../Redux/actions/auth.actions';
import Header from '../Components/Header';
import { ToastContainer } from 'react-toastify';

const Login = (props) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(formData);
  };

  return props.isLoggedIn ? (
    <Redirect to='/dashboard' />
  ) : (
    <Fragment>
      <Header />
      <Container className='center-content'>
        <ToastContainer />
        <Form className='login-form my-4' onSubmit={(e) => handleSubmit(e)}>
          <legend className='text-center primary-text'>
            Login/Signup to continue :{' '}
          </legend>
          <hr />
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={(e) => handleChange(e)}
              value={formData.email}
              required
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              onChange={(e) => handleChange(e)}
              value={formData.password}
              required
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.auth.isLoggedIn,
  type: ownProps.type,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitForm:
      ownProps.type === 'signup'
        ? (body) => dispatch(signup(body))
        : (body) => dispatch(login(body)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
