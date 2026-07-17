import { motion } from 'framer-motion';

export default function StepItem({ step, isLast }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-0 flex-1">
      <div className="flex flex-col md:flex-row items-center flex-1">
        {/* Step content */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.18 }}
          className="group flex flex-col items-center text-center px-5 py-4 rounded-xl cursor-default max-w-[160px] transition-colors duration-200 hover:bg-accent-light"
        >
          {/* Number circle — scales and brightens on hover */}
          <div className="w-11 h-11 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 mb-3 shadow-sm transition-all duration-200 group-hover:bg-accent-dark group-hover:scale-110 group-hover:shadow-md">
            {step.number}
          </div>

          <p className="font-bold text-sm mb-1 transition-colors duration-200 text-text-primary group-hover:text-accent">
            {step.title}
          </p>
          <p className="text-xs leading-relaxed transition-colors duration-200 text-text-secondary group-hover:text-accent-dark">
            {step.description}
          </p>
        </motion.div>

        {/* Connector line */}
        {!isLast && (
          <div className="hidden md:block flex-1 h-px border-t-2 border-dashed border-card-border mx-2 self-start mt-[22px]" />
        )}
      </div>

      {/* Mobile connector */}
      {!isLast && (
        <div className="md:hidden w-px h-8 border-l-2 border-dashed border-card-border" />
      )}
    </div>
  );
}
