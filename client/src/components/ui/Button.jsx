import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-btn transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-8 py-4 text-base',
  };

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-dark active:scale-[0.98]',
    secondary:
      'bg-transparent border border-text-primary text-text-primary hover:bg-text-primary hover:text-white active:scale-[0.98]',
    outline:
      'bg-transparent border border-card-border text-text-primary hover:border-accent hover:text-accent active:scale-[0.98]',
    'outline-dark':
      'bg-transparent border border-[#444] text-white hover:border-accent hover:text-accent active:scale-[0.98]',
    pill: 'rounded-full bg-accent text-white hover:bg-accent-dark active:scale-[0.98]',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
