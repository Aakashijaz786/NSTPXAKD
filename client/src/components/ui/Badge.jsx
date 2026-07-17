export default function Badge({ children, variant = 'light', className = '' }) {
  const variants = {
    light: 'bg-accent-light text-accent-dark border-accent-light',
    medium: 'bg-[#D4E4B8] text-[#3A5A1C] border-[#D4E4B8]',
    dark: 'bg-[#4A6B28] text-white border-[#4A6B28]',
    pill: 'bg-accent-light text-accent-dark border-accent-light',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
