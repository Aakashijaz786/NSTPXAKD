import { motion } from 'framer-motion';
import Section from '../layout/Section';
import TrackCard from '../ui/TrackCard';
import { tracks } from '../../constants/tracks';

export default function WhoShouldApply({ onApply }) {
  return (
    <Section id="who-should-apply" className="bg-bg">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-bold text-text-primary mb-3" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>
          Who should apply
        </h2>
        <p className="text-text-secondary text-lg">
          Three tracks, one program. Find where you fit.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tracks.map((track, i) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="h-full"
          >
            <TrackCard track={track} onApply={onApply} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
