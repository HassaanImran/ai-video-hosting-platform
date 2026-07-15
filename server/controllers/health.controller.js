import mongoose from 'mongoose';

/**
 * Returns server and database status.
 * Used by uptime monitors, load balancers, and deployment checks.
 */
const getHealth = (req, res) => {
  const dbStates = ['disconnected', 'connected', 'connecting', 'disconnecting'];

  res.status(200).json({
    success: true,
    message: 'StreamShield API is healthy',
    data: {
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      database: dbStates[mongoose.connection.readyState],
    },
  });
};

export { getHealth };
