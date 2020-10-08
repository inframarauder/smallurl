import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Header from '../Components/Header';
import ShortenUrlCard from '../Components/ShortenUrlCard';

const Landing = () => {
  return (
    <>
      <Header />
      <Row className='my-4'>
        <Col sm={6} className='center-content'>
          <legend className='text-center'>Try it now :</legend>
          <ShortenUrlCard />
          <p
            className='text-center my-4'
            style={{ padding: '20px', fontSize: '1.3rem' }}
          >
            Get access to all other features for free. Just create an account
            with us and you're all set!
          </p>
          <p className='text-center my-4'>
            <a href='/login'>
              <Button variant='primary' size='lg'>
                Signup Now
                <br />
                <small>It's free!</small>
              </Button>
            </a>
          </p>
        </Col>
        <Col sm={6} className='center-content'>
          <legend className='text-center'>Our Features:</legend>
          <Row className='my-4'>
            <Col sm={6}>
              <p className='text-center'>
                <img src='/images/easy.png' className='img-feature' />
              </p>
              <p className='primary-text text-center'>Free and Easy to use</p>
            </Col>
            <Col sm={6}>
              <p className='text-center'>
                <img src='/images/secure.png' className='img-feature' />
              </p>
              <p className='primary-text text-center'>Secure and Reliable</p>
            </Col>
          </Row>
          <Row className='my-4'>
            <Col sm={6}>
              <p className='text-center'>
                <img src='/images/https.png' className='img-feature' />
              </p>
              <p className='primary-text text-center'>HTTPS support enabled</p>
            </Col>
            <Col sm={6}>
              <p className='text-center'>
                <img src='/images/analytics.png' className='img-feature' />
              </p>
              <p className='primary-text text-center'>
                Custom dashboard with
                <br /> number of clicks on each link
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Landing;
