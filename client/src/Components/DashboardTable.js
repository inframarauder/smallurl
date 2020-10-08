import React, { useState, useEffect } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {
  getDashboard,
  deleteUrl,
  searchUrl,
} from '../Redux/actions/dashboard.actions';

const DashboardTable = ({ dashboard, getDashboard, deleteUrl, searchUrl }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    getDashboard();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const clearSearch = () => {
    window.location.reload();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUrl(search);
  };
  return dashboard.loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <ToastContainer />
      <Form className='my-4' onSubmit={(e) => handleSubmit(e)}>
        <Form.Group>
          <Form.Label> Search by Long URL :</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter long url to search'
            name='search'
            value={search}
            onChange={(e) => handleChange(e)}
            style={{ width: '22rem' }}
          />
        </Form.Group>
        <Button variant='secondary' type='submit'>
          Search
        </Button>
        <Button
          variant='secondary'
          className='ml-4'
          onClick={() => clearSearch()}
        >
          Clear
        </Button>
      </Form>
      <Table striped bordered hover responsive className='my-4'>
        <thead>
          <tr>
            <th>Long URL</th>
            <th>Short URL</th>
            <th>No. of Clicks</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {dashboard.urls.map((url) => (
            <tr key={url._id}>
              <td>
                <a href={url.longUrl}>{url.longUrl}</a>
              </td>
              <td>
                <a
                  href={`${window.location.hostname}/${url.shortUrl}`}
                >{`${window.location.hostname}/${url.shortUrl}`}</a>
              </td>
              <td>{url.clicks}</td>
              <td>
                <Button variant='danger' onClick={() => deleteUrl(url._id)}>
                  <i className='fa fa-trash'></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDashboard: () => dispatch(getDashboard()),
    deleteUrl: (id) => dispatch(deleteUrl(id)),
    searchUrl: (longUrl) => dispatch(searchUrl(longUrl)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTable);
