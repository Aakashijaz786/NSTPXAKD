import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ThankYou() {
  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6B8F3E', '#E8EFD8', '#4A6B28', '#ffffff'],
    });
  }, []);

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="w-20 h-20 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-accent" />
        </div>

        <h1 className="font-bold text-text-primary text-3xl mb-3">
          Application received!
        </h1>

        <p className="text-text-secondary leading-relaxed mb-8">
          We&apos;ll review your submission and get back to you within a few weeks.
          Check your inbox for a confirmation email.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
        >
          ← Back to home
        </Link>
      </motion.div>
    </div>
  );
}
