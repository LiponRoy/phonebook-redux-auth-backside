const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
dotenv.config();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/User');

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/auth', userRoutes);

//error handler
app.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || 'Something went wrong!';
	return res.status(status).json({
		success: false,
		status,
		message,
	});
});

// connected to mongoDB database
const mongoConnect = () => {
	mongoose
		.connect(process.env.MONGODB)
		.then(() => {
			console.log('connected to mongodb database Yea Hoo !');
		})
		.catch(err => {
			throw err;
		});
};

// connected to mongoDB database
app.listen(process.env.PORT, () => {
	mongoConnect();
	console.log('Connected to Server');
});
