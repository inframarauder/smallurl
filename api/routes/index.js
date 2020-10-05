const router = require('express').Router();

//auth
router.post('/auth/singup');
router.post('/auth/login');

//url-shortening
router.post('/urlshort/create');
router.get('/urlshort/redirect/:shortUrl');
router.get('/urlshort/dashboard/:userId');

module.exports = router;
