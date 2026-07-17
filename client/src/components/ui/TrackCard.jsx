import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Badge from './Badge';
import Button from './Button';

export default function TrackCard({ track, onApply }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-card-border rounded-card p-6 flex flex-col gap-4 relative overflow-hidden group"
    >
      {/* Green left accent border on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-card opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div className="flex items-start justify-between gap-2">
        <Badge variant={track.badgeColor}>{track.badge}</Badge>
      </div>

      <h3 className="text-xl font-bold text-text-primary leading-snug">
        {track.headline}
      </h3>

      <p className="text-text-secondary text-sm leading-relaxed">
        {track.description}
      </p>

      <ul className="space-y-2 flex-1">
        {track.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
            <Check size={16} className="text-accent mt-0.5 shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <Button
        variant="secondary"
        size="md"
        className="w-full mt-2"
        onClick={() => onApply(track.stageValue)}
      >
        {track.cta}
      </Button>
    </motion.div>
  );
}
