import { Router } from 'express';
import {
  submitApplication,
  getAllApplications,
} from '../controllers/applicationController.js';
import {
  validateApplication,
  handleValidationErrors,
} from '../validators/applicationValidator.js';
import rateLimiter from '../middleware/rateLimiter.js';
import adminAuth from '../middleware/adminAuth.js';

const router = Router();

router.post(
  '/',
  rateLimiter,
  validateApplication,
  handleValidationErrors,
  submitApplication
);

router.get('/', adminAuth, getAllApplications);

export default router;
