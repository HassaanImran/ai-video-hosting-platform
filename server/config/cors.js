import { env } from './env.js';

/**
 * CORS options.
 * Only the configured client URL is allowed to make cross-origin requests.
 * Update CLIENT_URL in .env when the frontend origin changes.
 */
const corsOptions = {
  origin: env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

export default corsOptions;
