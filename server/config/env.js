import dotenv from 'dotenv';

dotenv.config();

const required = ['MONGODB_URI', 'CLIENT_URL'];
for (const key of required) {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1);
  }
}

export const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGODB_URI,
  clientUrl: process.env.CLIENT_URL,
  adminApiKey: process.env.ADMIN_API_KEY || '',
  nodeEnv: process.env.NODE_ENV || 'development',
  emailUser: process.env.GMAIL_USER || '',
  emailPass: process.env.GMAIL_APP_PASSWORD || '',
  adminEmail: process.env.ADMIN_EMAIL || process.env.GMAIL_USER || '',
};
