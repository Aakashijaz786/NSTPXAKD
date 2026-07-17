import { motion } from 'framer-motion';

export default function BenefitCard({ benefit }) {
  const letter = benefit.letter;

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(107,143,62,0.14)' }}
      transition={{ duration: 0.18 }}
      className="group relative bg-white border border-card-border rounded-card p-6 flex flex-col gap-4 overflow-hidden cursor-default
                 transition-colors duration-200 hover:border-accent"
    >
      {/* Green left accent bar */}
      <span className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-card
                       translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100
                       transition-all duration-200" />

      {/* Letter badge */}
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                      bg-accent-light border border-[#C5D9A0]
                      transition-colors duration-200 group-hover:bg-accent">
        <span className="font-bold text-base text-accent transition-colors duration-200 group-hover:text-white">
          {letter}
        </span>
      </div>

      <div>
        <h3 className="font-bold text-text-primary mb-1.5 transition-colors duration-200 group-hover:text-accent">
          {benefit.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
}
