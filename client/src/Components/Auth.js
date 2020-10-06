import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Api from '../Services';

const Auth = (props) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } =
        props.type === 'Signup'
          ? await Api.signup(formData)
          : await Api.login(formData);

      console.log(data);

      localStorage.setItem('token', data.token);
    } catch (error) {
      alert(error.data.response.error);
      console.error(error);
    }
  };

  return (
    <>
      <Button
        variant='primary'
        onClick={handleShow}
        size={props.type === 'Signup' ? 'lg' : 'sm'}
      >
        {props.type}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.type}</Modal.Title>
        </Modal.Header>

        <Form className='login-form' onSubmit={(e) => handleSubmit(e)}>
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
      </Modal>
    </>
  );
};

export default Auth;
