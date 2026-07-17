import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-sm"
      >
        <p className="text-8xl font-bold text-accent mb-4">404</p>
        <h1 className="text-2xl font-bold text-text-primary mb-2">Page not found</h1>
        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-btn hover:bg-accent-dark transition-colors"
        >
          Back to home
        </Link>
      </motion.div>
    </div>
  );
}
