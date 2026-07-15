import mongoose from 'mongoose';
import { env } from './env.js';

/**
 * Connects to MongoDB Atlas using Mongoose.
 * Exits the process on failure so the app never runs without a database.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGO_URI);

    // eslint-disable-next-line no-console
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

// Log unexpected disconnects/errors after the initial connection succeeds.
mongoose.connection.on('error', (error) => {
  // eslint-disable-next-line no-console
  console.error(`MongoDB runtime error: ${error.message}`);
});

mongoose.connection.on('disconnected', () => {
  // eslint-disable-next-line no-console
  console.warn('MongoDB disconnected');
});

export default connectDB;
