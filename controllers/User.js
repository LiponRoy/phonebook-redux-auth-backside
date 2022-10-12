const mongoose = require('mongoose');
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const { createError } = require('../error.js');
const jwt = require('jsonwebtoken');

//  get all Users
const getUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		if (!users) return next(createError(404, 'User already exits !'));
		res.status(200).json(users);
	} catch (err) {
		next(err);
	}
};

module.exports = {
	getUsers,
};
