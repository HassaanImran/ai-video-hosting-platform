import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import corsOptions from './config/cors.js';
import { env } from './config/env.js';
import notFound from './middleware/notFound.middleware.js';
import errorHandler from './middleware/error.middleware.js';
import healthRoutes from './routes/health.routes.js';

const app = express();

// --- Security & core middleware ---
app.use(helmet());
app.use(cors(corsOptions));

// --- Request logging ---
// 'dev' format in development for readability, 'combined' in production for detail.
app.use(morgan(env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// --- Body parsers ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Routes ---
// NOTE: Auth, video, user, and admin routes are intentionally NOT mounted here.
// This is the Backend Foundation only. Future modules will be added as:
//   app.use('/api/auth', authRoutes);
//   app.use('/api/videos', videoRoutes);
app.use('/api/health', healthRoutes);

// --- 404 handler (must come after all real routes) ---
app.use(notFound);

// --- Centralized error handler (must be the last middleware) ---
app.use(errorHandler);

export default app;
