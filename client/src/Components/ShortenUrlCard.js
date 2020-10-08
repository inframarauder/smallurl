import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const ShortenUrlCard = () => {
  const [state, setState] = useState({ longUrl: '' });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    );
    if (!urlPattern.test(state.longUrl)) {
      toast.error('Invalid URL entered!');
    }
  };

  return (
    <Card className='text-center shorten-url-card'>
      <ToastContainer />
      <Card.Body>
        <Card.Title>Enter your URL here!</Card.Title>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder='Paste your URL here...'
              name='longUrl'
              value={state.longUrl}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ShortenUrlCard;
