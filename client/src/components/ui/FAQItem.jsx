import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-card-border py-5">
      <button
        className="flex items-center justify-between w-full text-left gap-4"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <span
          className={`font-semibold text-[17px] leading-snug transition-colors duration-200 ${
            open ? 'text-accent' : 'text-text-primary'
          }`}
        >
          {faq.question}
        </span>
        <span className="shrink-0 text-text-secondary">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary text-sm leading-relaxed pt-3 pr-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
