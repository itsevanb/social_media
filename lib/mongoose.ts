import mongoose from 'mongoose';

let isConnected = false; // variable to check if mongoose is connected or not

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    
    if(!process.env.MONGODB_URL) return console.log('MongoDB URL not found');
    if(isConnected) return console.log('Already connected to DB');

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;
        console.log('Connected to MongoDB');

    } catch (error) {
        console.log('Error connecting to DB', error);
    }
}