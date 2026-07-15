import AppError from '../utils/AppError.js';

/**
 * Handles requests to routes that don't exist.
 * Must be registered AFTER all real routes and BEFORE the error middleware.
 */
const notFound = (req, res, next) => {
  const error = new AppError(`Route not found: ${req.originalUrl}`, 404);
  next(error);
};

export default notFound;
