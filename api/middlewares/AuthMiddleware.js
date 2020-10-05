const jwt = require('jsonwebtoken');

//middleware to protect routes
exports.isAuthenticated = (req, res, next) => {
  let token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(403).json({ error: 'Access denied, no token provided!' });
  } else {
    try {
      const payload = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
      req.user = payload;
      next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res
          .status(401)
          .json({ error: 'Session timed out,please login again' });
      } else if (error.name === 'JsonWebTokenError') {
        return res
          .status(401)
          .json({ error: 'Invalid token,please login again!' });
      } else {
        console.error(error);
        return res.status(400).json({ error });
      }
    }
  }
};
