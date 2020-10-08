import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import Header from '../Components/Header';

const Dashboard = ({ user }) => {
  return (
    <>
      <Header />
      <Container className='center-content my-4'>
        <legend className='text-center'>
          Logged in as : <span className='primary-text'>{user}</span>
        </legend>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Dashboard);
