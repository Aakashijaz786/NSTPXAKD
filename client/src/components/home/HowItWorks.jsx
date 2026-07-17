import { motion } from 'framer-motion';
import Section from '../layout/Section';
import StepItem from '../ui/StepItem';
import GuaranteeBox from '../ui/GuaranteeBox';
import { steps } from '../../constants/steps';

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-bg">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="font-bold text-text-primary mb-3" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>
          How it works
        </h2>
        <p className="text-text-secondary text-lg">
          A four-month program, mostly virtual, ending on-site.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row items-start justify-between">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <StepItem step={step} isLast={i === steps.length - 1} />
          </motion.div>
        ))}
      </div>

      <GuaranteeBox />
    </Section>
  );
}
