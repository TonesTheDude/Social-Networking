import mongoose from 'mongoose';

const db = async () => {
  try {
    const mongoDBURL = process.env.MONGODB_URI || "mongodb://localhost:27017/socialNetworking";
    await mongoose.connect(mongoDBURL);
    console.log("Connected to MongoDB");
    return mongoose.connection;
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

export default db; 