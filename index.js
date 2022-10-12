const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

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

app.get('/', (req, res) => {
	res.send('hi i am here');
});

app.listen(process.env.PORT, () => {
	mongoConnect();
	console.log('Connected to Server');
});
