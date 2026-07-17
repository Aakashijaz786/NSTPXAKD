import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function GuaranteeBox() {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(107,143,62,0.18)' }}
      transition={{ duration: 0.18 }}
      className="group relative bg-accent-light border border-[#C5D9A0] rounded-card p-6 mt-12 max-w-3xl mx-auto overflow-hidden cursor-default
                 transition-colors duration-200 hover:border-accent hover:bg-[#D4E8B4]"
    >
      {/* Left accent bar */}
      <span className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-card
                       opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div className="flex items-start gap-3">
        <ShieldCheck
          size={22}
          className="mt-0.5 shrink-0 text-accent transition-transform duration-200 group-hover:scale-110"
        />
        <div>
          <h4 className="font-bold text-text-primary mb-2 transition-colors duration-200 group-hover:text-accent">
            Be clear on what&apos;s guaranteed
          </h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            Every selected team gets mentorship, lab access, OEM introductions, and a Demo
            Day platform in front of AKD Group and invited investors. Demo Day is a pitch
            opportunity, not a guaranteed investment — funding decisions follow AKD Group&apos;s
            standard evaluation process, the same as any investment.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
