import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { quickShorten, createShortUrl } from '../Redux/actions/url.actions';

const ShortenUrlCard = ({ url, auth, createShortUrl, quickShorten }) => {
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
    } else {
      auth.isLoggedIn ? createShortUrl(state) : quickShorten(state);
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
      {url.shortened && (
        <Card.Footer className='text-muted'>
          Shortened Link :
          <a href={`${window.location.hostname}/${url.shortUrl}`}>
            {`${window.location.hostname}/${url.shortUrl}`}{' '}
          </a>
        </Card.Footer>
      )}
    </Card>
  );
};

const mapStateToProps = (state) => ({ url: state.url, auth: state.auth });
const mapDispatchToProps = (dispatch) => {
  return {
    quickShorten: (body) => dispatch(quickShorten(body)),
    createShortUrl: (body) => dispatch(createShortUrl(body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortenUrlCard);
