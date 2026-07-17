import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import { stats } from '../../constants/stats';

function StatItem({ stat, index, isLast }) {
  const { count, ref } = useCountUp(stat.value, 2000, false);

  const displayValue = stat.display
    ? stat.display
    : `${stat.prefix}${count}${stat.suffix}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`flex flex-col items-center text-center px-6 py-2 ${
        !isLast ? 'border-r border-dark-border' : ''
      }`}
    >
      <span className="text-white font-bold text-3xl md:text-4xl leading-none mb-2">
        {displayValue}
      </span>
      <span className="text-accent-light text-xs md:text-sm leading-snug max-w-[160px]" style={{ color: '#9EBF6A' }}>
        {stat.label}
      </span>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <div className="bg-dark py-12">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              stat={stat}
              index={i}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
