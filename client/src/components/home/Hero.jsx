import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { scrollToSection } from '../../utils/scrollTo';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
  }),
};

export default function Hero({ onApply }) {
  return (
    <section className="bg-bg pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="container-max">
        {/* Sage-green card */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="rounded-2xl px-8 py-12 md:px-14 md:py-16"
          style={{ backgroundColor: '#E4EDD6' }}
        >
          {/* Eyebrow */}
          <motion.p
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-widest mb-5"
            style={{ color: '#4A6B28' }}
          >
            COHORT 1 &bull; APPLICATIONS OPEN
          </motion.p>

          {/* Headline */}
          <motion.h1
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-bold text-text-primary leading-[1.12] mb-6 max-w-2xl"
            style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}
          >
            Build the technology Pakistan&apos;s defense industry will run on&nbsp;—
            with capital and mentors behind you.
          </motion.h1>

          {/* Sub */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-base leading-relaxed mb-10 max-w-xl"
            style={{ color: '#2A2A2A' }}
          >
            A four-month incubation program from NSTP–NUST and AKD Group for engineers and
            founders building defense and dual-use technology. Mentorship, lab access, and a
            direct line to industry and investors — open to early ideas, launched products,
            and scaling companies alike.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start gap-3"
          >
            <button
              onClick={() => onApply('')}
              className="px-7 py-3.5 bg-accent text-white font-bold text-[15px] rounded-lg hover:bg-accent-dark active:scale-[0.98] transition-all duration-150"
            >
              Apply for Cohort 1
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="px-7 py-3.5 bg-white text-text-primary font-semibold text-[15px] rounded-lg border border-[#BBBBBB] hover:bg-text-primary hover:text-white hover:border-text-primary active:scale-[0.98] transition-all duration-150"
            >
              See how it works
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
