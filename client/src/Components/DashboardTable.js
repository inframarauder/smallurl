import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { getDashboard, deleteUrl } from '../Redux/actions/dashboard.actions';

const DashboardTable = ({ dashboard, getDashboard, deleteUrl }) => {
  // eslint-disable-next-line
  useEffect(() => getDashboard(), []);

  return dashboard.loading ? (
    <div>Loading...</div>
  ) : (
    <Table striped bordered hover responsive className='my-4'>
      <ToastContainer />
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
                <i class='fa fa-trash'></i>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDashboard: () => dispatch(getDashboard()),
    deleteUrl: (id) => dispatch(deleteUrl(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTable);
