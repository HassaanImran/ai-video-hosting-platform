import dotenv from 'dotenv';

dotenv.config();

/**
 * Centralized environment configuration.
 * Every other file should import env values from here instead of
 * reading process.env directly. This keeps secret access in one place
 * and makes it easy to validate required variables on startup.
 */
const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
};

/**
 * Fail fast if required variables are missing.
 * Prevents the server from starting in a broken state.
 */
const requiredVars = ['MONGO_URI'];

function validateEnv() {
  const missing = requiredVars.filter((key) => !env[key]);

  if (missing.length > 0) {
    // eslint-disable-next-line no-console
    console.error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
    process.exit(1);
  }
}

export { env, validateEnv };
