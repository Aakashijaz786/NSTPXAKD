import { config } from '../config/env.js';

const adminAuth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || apiKey !== config.adminApiKey) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  next();
};

export default adminAuth;
