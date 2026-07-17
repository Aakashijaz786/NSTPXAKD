import rateLimit from 'express-rate-limit';

const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: {
    success: false,
    message: 'Too many submissions from this IP. Please try again after an hour.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export default rateLimiter;
