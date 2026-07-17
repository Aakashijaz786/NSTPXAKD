import Application from '../models/Application.js';
import asyncHandler from '../utils/asyncHandler.js';
import { sendConfirmationEmail, sendAdminNotification } from '../utils/mailer.js';
import { config } from '../config/env.js';

export const submitApplication = asyncHandler(async (req, res) => {
  const {
    fullName,
    email,
    teamName,
    stage,
    projectDescription,
    prototypeLink,
    hearAboutUs,
  } = req.body;

  const application = await Application.create({
    fullName,
    email,
    teamName: teamName || '',
    stage,
    projectDescription,
    prototypeLink: prototypeLink || '',
    hearAboutUs: hearAboutUs || '',
    ipAddress: req.ip,
  });

  // Send emails only if credentials are configured
  if (config.emailUser && config.emailPass) { // reads GMAIL_USER + GMAIL_APP_PASSWORD
    // Fire both emails concurrently — don't block the response if one fails
    Promise.all([
      sendConfirmationEmail(application).catch((err) =>
        console.error('Confirmation email failed:', err.message)
      ),
      sendAdminNotification(application).catch((err) =>
        console.error('Admin notification email failed:', err.message)
      ),
    ]);
  }

  res.status(201).json({
    success: true,
    message: 'Application received',
    id: application._id,
  });
});

export const getAllApplications = asyncHandler(async (req, res) => {
  const applications = await Application.find().sort({ submittedAt: -1 });
  res.status(200).json({
    success: true,
    count: applications.length,
    data: applications,
  });
});
