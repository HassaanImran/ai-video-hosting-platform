/**
 * Custom application error.
 * Use this instead of throwing plain Error objects so the centralized
 * error middleware can distinguish expected, operational errors
 * (bad input, not found, etc.) from unexpected programming errors.
 *
 * Example:
 *   throw new AppError('Video not found', 404);
 */
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
