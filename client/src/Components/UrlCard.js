import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const UrlCard = () => {
  return (
    <Card className='text-center card-width'>
      <Card.Body>
        <Card.Title>Enter your URL here!</Card.Title>
        <Form>
          <Form.Group>
            <Form.Control type='text' placeholder='Paste your URL here...' />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default UrlCard;
