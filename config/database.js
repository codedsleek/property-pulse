import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    //if the database is already connected, don't connect again
    if (connected) {
        console.log("Already connected to MongoDB");
        return;
    }

    // Connect to MongoDB 
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

export default connectDB;