import React from 'react';
import UrlCard from './UrlCard';
import Auth from './Auth';
import { Container, Card } from 'react-bootstrap';

const Landing = () => {
  return (
    <Container className='center-content'>
      <h1 className='primary-text my-4'>
        <strong>SmallURL</strong>
      </h1>

      <UrlCard />
      <hr />
      <Card className='text-center card-width'>
        <Card.Body>
          <Card.Title>Want more? Try our features!</Card.Title>
          <Card.Text>
            We provide a dashboard to keep track of your urls and monitor stats.
            <br />
            Signup and get access to all our features for free!
          </Card.Text>
          <Auth type='Signup' />
        </Card.Body>
        <Card.Footer className='text-muted'>
          Already have an account?
          <br />
          <Auth type='Login' />
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Landing;
