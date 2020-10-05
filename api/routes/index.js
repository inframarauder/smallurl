const router = require('express').Router();

//auth
router.post('/auth/singup');
router.post('/auth/login');

//url
router.post('/url/create');
router.get('/url/dashboard');
router.get('/url/search');
router.delete('/url/delete/:urlId');
router.get('/url/redirect/:shortUrl');

module.exports = router;
