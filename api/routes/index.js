const router = require('express').Router();
const UrlController = require('../controllers/UrlController');
const AuthController = require('../controllers/AuthController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const ValidationMiddleware = require('../middlewares/ValidationMiddleware');

//auth
router.post(
  '/auth/signup',
  ValidationMiddleware.validateUser,
  AuthController.signup
);
router.post(
  '/auth/login',
  ValidationMiddleware.validateUser,
  AuthController.login
);

//url
router.post(
  '/url/create',
  AuthMiddleware.isAuthenticated,
  ValidationMiddleware.validateUrl,
  UrlController.createShortUrl
);
router.get(
  '/url/dashboard',
  AuthMiddleware.isAuthenticated,
  UrlController.getDashboard
);
router.get('/url/search', AuthMiddleware.isAuthenticated, UrlController.getUrl);
router.delete(
  '/url/delete/:urlId',
  AuthMiddleware.isAuthenticated,
  UrlController.deleteUrl
);
router.put('/url/redirect/:shortUrl', UrlController.redirectToUrl);

module.exports = router;
