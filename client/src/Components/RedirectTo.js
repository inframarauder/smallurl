import React, { useState, useEffect } from 'react';
import Api from '../Services';

const RedirectTo = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { shortUrl } = props.match.params;
        const { data } = await Api.redirect(shortUrl);
        console.log(data);
        setLoading(false);
        window.location.href = data.longUrl;
      } catch (error) {
        console.error(error);
        setLoading(false);
        window.location.href = '/not/found';
      }
    })();
    // eslint-disable-next-line
  }, []);

  return loading ? <div>Please wait....</div> : null;
};

export default RedirectTo;
