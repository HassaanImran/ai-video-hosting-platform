import app from './app.js';
import connectDB from './config/database.js';
import { env, validateEnv } from './config/env.js';

validateEnv();

const startServer = async () => {
  await connectDB();

  const server = app.listen(env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(
      `StreamShield server running in ${env.NODE_ENV} mode on port ${env.PORT}`
    );
  });

  // Handle unhandled promise rejections gracefully instead of crashing silently.
  process.on('unhandledRejection', (err) => {
    // eslint-disable-next-line no-console
    console.error(`Unhandled Rejection: ${err.message}`);
    server.close(() => process.exit(1));
  });
};

startServer();
