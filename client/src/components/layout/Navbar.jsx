import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollTo';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import Button from '../ui/Button';

const navLinks = [
  { label: 'Who should apply', id: 'who-should-apply' },
  { label: 'What you get', id: 'what-you-get' },
  { label: 'How it works', id: 'how-it-works' },
  { label: 'FAQ', id: 'faq' },
];

function NavLink({ link, active, onClick }) {
  const isActive = active === link.id;

  return (
    <button
      onClick={() => onClick(link.id)}
      className={`relative group text-sm font-medium transition-colors duration-200 px-2 py-1 ${
        isActive ? 'text-accent' : 'text-text-secondary hover:text-accent'
      }`}
    >
      {/* Green bottom bar — shows on hover AND when active */}
      <span
        className={`absolute inset-x-1 bottom-0 h-0.5 rounded-full bg-accent transition-opacity duration-200 ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        aria-hidden="true"
      />
      <span>{link.label}</span>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(
    navLinks.map((l) => l.id).concat(['apply']),
    80
  );

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (id) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? 'shadow-sm border-b border-[#B8D090]'
            : 'border-b border-transparent'
        }`}
        style={{ backgroundColor: '#E8EFD8' }}
      >
        <div className="container-max h-full flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Go to top"
            className="group relative flex items-center gap-2.5 font-bold text-text-primary text-[15px] tracking-tight px-1 py-1"
          >
            {/* Logo bottom bar on hover */}
            <span
              className="absolute inset-x-1 bottom-0 h-0.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-hidden="true"
            />

            {/* Teardrop pin icon */}
            <span className="relative z-10 shrink-0 flex flex-col items-center" style={{ width: 14, height: 22 }}>
              {/* Circle top */}
              <span
                className="rounded-full bg-accent block"
                style={{ width: 14, height: 14 }}
              />
              {/* Pointed stem */}
              <span
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                  borderTop: '9px solid #6B8F3E',
                  marginTop: -1,
                }}
              />
            </span>

            {/* Two-line stacked text */}
            <span className="relative z-10 flex flex-col leading-[1.18]">
              <span className="font-bold text-[16px] tracking-tight text-text-primary">NSTP × AKD</span>
              <span className="font-bold text-[16px] tracking-tight text-text-primary">GROUP</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                link={link}
                active={active}
                onClick={handleNav}
              />
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="pill" size="sm" onClick={() => handleNav('apply')}>
              Apply now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-btn text-text-primary"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col pt-16"
          >
            <nav className="flex flex-col gap-2 p-6" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="text-left text-lg font-medium text-text-primary py-3 border-b border-card-border hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  variant="pill"
                  size="md"
                  className="w-full"
                  onClick={() => handleNav('apply')}
                >
                  Apply now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
