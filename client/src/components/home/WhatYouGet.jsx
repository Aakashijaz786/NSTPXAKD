import { motion } from 'framer-motion';
import Section from '../layout/Section';
import BenefitCard from '../ui/BenefitCard';
import { benefits } from '../../constants/benefits';

export default function WhatYouGet() {
  return (
    <Section id="what-you-get" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-bold text-text-primary mb-3" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>
          What you get
        </h2>
        <p className="text-text-secondary text-lg">
          Every cohort member gets access to this, regardless of stage.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <BenefitCard benefit={benefit} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
