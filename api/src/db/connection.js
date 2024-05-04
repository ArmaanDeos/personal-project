import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n Database connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`Database connection failed! : ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
