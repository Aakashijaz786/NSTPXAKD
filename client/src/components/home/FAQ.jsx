import { motion } from 'framer-motion';
import Section from '../layout/Section';
import FAQItem from '../ui/FAQItem';
import { faqs } from '../../constants/faqs';

export default function FAQ() {
  return (
    <Section id="faq" className="bg-bg">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-bold text-text-primary" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>
          Frequently asked questions
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-faq mx-auto"
      >
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </motion.div>
    </Section>
  );
}
