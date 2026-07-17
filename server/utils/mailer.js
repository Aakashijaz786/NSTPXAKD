import nodemailer from 'nodemailer';
import { config } from '../config/env.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.emailUser,
    pass: config.emailPass, // Gmail App Password (not your real password)
  },
});

const stageLabels = {
  'idea-mvp': 'Idea / MVP',
  launch: 'Launch Stage',
  scaling: 'Scaling & Growth',
};

// Email to applicant — confirmation
export async function sendConfirmationEmail(application) {
  const { fullName, email, stage } = application;

  await transporter.sendMail({
    from: `"NSTP × AKD Group" <${config.emailUser}>`,
    to: email,
    subject: 'Application received — NSTP × AKD Defense Tech Incubation',
    html: `
      <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
        <div style="background: #6B8F3E; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; font-size: 20px; margin: 0;">NSTP × AKD Group</h1>
          <p style="color: #E8EFD8; font-size: 13px; margin: 4px 0 0;">Defense Technology Incubation Program</p>
        </div>

        <div style="background: #ffffff; padding: 32px; border: 1px solid #E0E0D8; border-top: none; border-radius: 0 0 12px 12px;">
          <p style="font-size: 16px; margin: 0 0 16px;">Hi <strong>${fullName}</strong>,</p>

          <p style="font-size: 15px; color: #333; line-height: 1.6; margin: 0 0 16px;">
            Thank you for applying to the <strong>NSTP × AKD Group Defense Technology Incubation Program — Cohort 1</strong>.
            We have received your application for the <strong>${stageLabels[stage] || stage}</strong> track.
          </p>

          <div style="background: #E8EFD8; border-left: 4px solid #6B8F3E; border-radius: 6px; padding: 16px 20px; margin: 24px 0;">
            <p style="margin: 0; font-size: 14px; color: #333; line-height: 1.6;">
              Our team will review your submission. Internal screening and jury selection
              typically take <strong>a few weeks</strong>. You will hear back from us either way.
            </p>
          </div>

          <p style="font-size: 14px; color: #555; line-height: 1.6; margin: 0 0 24px;">
            If you have any questions in the meantime, you can reach us by replying to this email.
          </p>

          <p style="font-size: 15px; margin: 0;">
            Good luck,<br/>
            <strong>The NSTP × AKD Group Team</strong>
          </p>
        </div>

        <p style="text-align: center; font-size: 12px; color: #999; margin-top: 16px;">
          © 2024 NSTP–NUST × AKD Group. All rights reserved.
        </p>
      </div>
    `,
  });
}

// Email to admin — new application notification
export async function sendAdminNotification(application) {
  const { fullName, email, teamName, stage, projectDescription, prototypeLink, hearAboutUs, submittedAt } = application;

  await transporter.sendMail({
    from: `"NSTP Portal" <${config.emailUser}>`,
    to: config.adminEmail,
    subject: `New application: ${fullName} — ${stageLabels[stage] || stage}`,
    html: `
      <div style="font-family: Inter, Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1A1A1A;">
        <div style="background: #111111; padding: 20px 32px; border-radius: 12px 12px 0 0;">
          <h2 style="color: #6B8F3E; font-size: 18px; margin: 0;">New Application Received</h2>
          <p style="color: #AAAAAA; font-size: 13px; margin: 4px 0 0;">NSTP × AKD Group Incubation Portal</p>
        </div>

        <div style="background: #ffffff; border: 1px solid #E0E0D8; border-top: none; border-radius: 0 0 12px 12px; overflow: hidden;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="background: #F5F5F0;">
              <td style="padding: 12px 24px; font-weight: 600; width: 35%; color: #555;">Full name</td>
              <td style="padding: 12px 24px; color: #1A1A1A;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 24px; font-weight: 600; color: #555;">Email</td>
              <td style="padding: 12px 24px;"><a href="mailto:${email}" style="color: #6B8F3E;">${email}</a></td>
            </tr>
            <tr style="background: #F5F5F0;">
              <td style="padding: 12px 24px; font-weight: 600; color: #555;">Team / company</td>
              <td style="padding: 12px 24px; color: #1A1A1A;">${teamName || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 24px; font-weight: 600; color: #555;">Stage</td>
              <td style="padding: 12px 24px;">
                <span style="background: #E8EFD8; color: #4A6B28; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                  ${stageLabels[stage] || stage}
                </span>
              </td>
            </tr>
            <tr style="background: #F5F5F0;">
              <td style="padding: 12px 24px; font-weight: 600; color: #555;">Project</td>
              <td style="padding: 12px 24px; color: #1A1A1A; line-height: 1.6;">${projectDescription}</td>
            </tr>
            <tr>
              <td style="padding: 12px 24px; font-weight: 600; color: #555;">Prototype / link</td>
              <td style="padding: 12px 24px;">
                ${prototypeLink
                  ? `<a href="${prototypeLink}" style="color: #6B8F3E;">${prototypeLink}</a>`
                  : '—'}
              </td>
            </tr>
            <tr style="background: #F5F5F0;">
              <td style="padding: 12px 24px; font-weight: 600; color: #555;">Heard via</td>
              <td style="padding: 12px 24px; color: #1A1A1A;">${hearAboutUs || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 24px; font-weight: 600; color: #555;">Submitted at</td>
              <td style="padding: 12px 24px; color: #1A1A1A;">${new Date(submittedAt).toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })} PKT</td>
            </tr>
          </table>
        </div>

        <p style="text-align: center; font-size: 12px; color: #999; margin-top: 16px;">
          NSTP × AKD Group Incubation Portal — Admin Notification
        </p>
      </div>
    `,
  });
}
