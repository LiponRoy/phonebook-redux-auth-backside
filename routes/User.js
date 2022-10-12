const express = require('express');
const { getUsers } = require('../controllers/User');
const { verifyToken } = require('../verifyToken');

const router = express.Router();

//CREATE A USER
router.get('/users', verifyToken, getUsers);

module.exports = router;
