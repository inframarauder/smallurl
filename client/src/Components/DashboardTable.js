import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { getDashboard } from '../Redux/actions/dashboard.actions';

const DashboardTable = ({ dashboard, getDashboard }) => {
  // eslint-disable-next-line
  useEffect(() => getDashboard(), []);

  return dashboard.loading ? (
    <div>Loading...</div>
  ) : (
    <Table striped bordered hover className='my-4'>
      <ToastContainer />
      <thead>
        <tr>
          <th>Long URL</th>
          <th>Short URL</th>
          <th>No. of Clicks</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {dashboard.urls.map((url) => (
          <tr>
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
              <Button variant='danger'>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTable);
