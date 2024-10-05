import mongoose from 'mongoose';

const url = process.env.NODE_ENV === "production" ?  process.env.MONGO_URI ?? 'mongodb://mongo:27017/docker-node-mongo' : 'localhost:27017/docker-node-mongo';

const connectDB = async () => {
	try {
		await mongoose.connect(url);
		console.log('MongoDB is connected');
	} catch (error: any) {
		console.log(error);
		return Error(error);
	}
};
