import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import { connectDB } from './config/db.js';
import applicationRoutes from './routes/applicationRoutes.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(cors({ origin: config.clientUrl, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

app.use('/api/applications', applicationRoutes);

app.use(errorHandler);

connectDB().then(() => {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
});
