import mongoose from 'mongoose';

export const connectDB = async () => {
	await mongoose
		.connect(
			'mongodb+srv://anukul2004:PLD3zABZPXZeDnTF@cluster0.42jmljo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
		)
		.then(() => console.log('DB Connected'));
};

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.