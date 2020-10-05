const router = require('express').Router();
const UrlController = require('../controllers/UrlController');
const AuthController = require('../controllers/AuthController');

//auth
router.post('/auth/singup', AuthController.signup);
router.post('/auth/login', AuthController.login);

//url
router.post('/url/create', UrlController.createShortUrl);
router.get('/url/dashboard', UrlController.getDashboard);
router.get('/url/search', UrlController.getUrl);
router.delete('/url/delete/:urlId', UrlController.deleteUrl);
router.get('/url/redirect/:shortUrl', UrlController.redirectToUrl);

module.exports = router;
