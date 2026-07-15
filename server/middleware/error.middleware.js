import { env } from '../config/env.js';

/**
 * Centralized error handler.
 * Every error in the app (thrown in controllers, passed via next(error),
 * or unhandled) ends up here. Response shape matches 07_CODE_STANDARDS.md:
 *   { success: false, message: "..." }
 *
 * Internal error details are never sent to the client, only logged.
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode && err.statusCode >= 400 ? err.statusCode : 500;
  const message = err.isOperational ? err.message : 'Internal server error';

  // eslint-disable-next-line no-console
  console.error(`[ERROR] ${req.method} ${req.originalUrl} - ${err.message}`);

  res.status(statusCode).json({
    success: false,
    message,
    ...(env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

export default errorHandler;
