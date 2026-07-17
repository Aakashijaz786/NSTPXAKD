import { body, validationResult } from 'express-validator';

export const validateApplication = [
  body('fullName')
    .trim()
    .notEmpty().withMessage('Full name is required')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),

  body('stage')
    .notEmpty().withMessage('Stage selection is required')
    .isIn(['idea-mvp', 'launch', 'scaling']).withMessage('Invalid stage selected'),

  body('projectDescription')
    .trim()
    .notEmpty().withMessage('Project description is required')
    .isLength({ min: 20 }).withMessage('Description must be at least 20 characters')
    .isLength({ max: 500 }).withMessage('Description must be under 500 characters'),

  body('teamName').optional().trim(),
  body('prototypeLink').optional().trim(),
  body('hearAboutUs').optional().trim(),
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
  }
  next();
};
