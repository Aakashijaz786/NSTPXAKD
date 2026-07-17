import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  teamName: { type: String, trim: true, default: '' },
  stage: {
    type: String,
    required: true,
    enum: ['idea-mvp', 'launch', 'scaling'],
  },
  projectDescription: { type: String, required: true, maxlength: 500 },
  prototypeLink: { type: String, default: '' },
  hearAboutUs: { type: String, default: '' },
  submittedAt: { type: Date, default: Date.now },
  ipAddress: { type: String },
});

export default mongoose.model('Application', applicationSchema);
