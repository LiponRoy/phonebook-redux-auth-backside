const express = require('express');
const { signin, signup, logout } = require('../controllers/auth.js');

const router = express.Router();

//CREATE A USER
router.post('/signup', signup);

//SIGN IN
router.post('/signin', signin);
//SIGN IN
router.get('/logout', logout);

//GOOGLE AUTH
// router.post('/google', googleAuth);

module.exports = router;
