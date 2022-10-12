const mongoose = require('mongoose');

const PhonebookSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
		},
	},
	{ timestamps: true },
);

export default mongoose.model('Phonebook', PhonebookSchema);
