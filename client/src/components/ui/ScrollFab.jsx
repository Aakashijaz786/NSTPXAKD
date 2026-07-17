import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';

export default function ScrollFab() {
  const [visible, setVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollY > 120);
      setAtBottom(docH > 0 && scrollY >= docH - 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const goBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-1.5"
        >
          {/* Up */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            onClick={goTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-[#C5D9A0] transition-colors duration-150"
            style={{ backgroundColor: '#6B8F3E', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#4A6B28')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#6B8F3E')}
          >
            <ArrowUp size={16} strokeWidth={2.5} />
          </motion.button>

          {/* Down */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            onClick={goBottom}
            aria-label="Scroll to bottom"
            className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-[#C5D9A0] transition-colors duration-150"
            style={{
              backgroundColor: atBottom ? '#4A6B28' : '#E8EFD8',
              color: atBottom ? '#fff' : '#4A6B28',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#6B8F3E';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = atBottom ? '#4A6B28' : '#E8EFD8';
              e.currentTarget.style.color = atBottom ? '#fff' : '#4A6B28';
            }}
          >
            <ArrowDown size={16} strokeWidth={2.5} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
