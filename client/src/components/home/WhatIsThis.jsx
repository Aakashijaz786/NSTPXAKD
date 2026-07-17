import { motion } from 'framer-motion';
import { Building2, TrendingUp } from 'lucide-react';

export default function WhatIsThis() {
  return (
    <section className="bg-bg py-20">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-card-border bg-white overflow-hidden shadow-sm"
        >
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-accent via-[#8AAF52] to-accent-light" />

          <div className="px-8 py-12 md:px-14 md:py-14">
            {/* Eyebrow */}
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">
              About the program
            </p>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-bold text-text-primary leading-tight mb-5"
              style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}
            >
              Pakistan&apos;s first defense &amp; dual-use
              technology incubation platform
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-text-secondary text-lg leading-relaxed max-w-2xl mb-12"
            >
              NSTP–NUST leads the design, delivery, and mentorship of the program. AKD Group
              provides capital, international industry introductions, and post-investment support.
              Together, this is Pakistan&apos;s first defense and dual-use technology incubation
              platform combining a national research institution with an active investment partner.
            </motion.p>

            {/* Partner cards row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6"
            >
              {/* NSTP–NUST card */}
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(107,143,62,0.15)' }}
                transition={{ duration: 0.2 }}
                className="flex-1 group relative overflow-hidden border border-card-border rounded-xl px-7 py-6 cursor-default bg-bg transition-colors duration-200 hover:border-accent hover:bg-accent-light"
              >
                {/* Green left accent */}
                <span className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-light border border-[#C5D9A0] flex items-center justify-center shrink-0 group-hover:bg-white transition-colors duration-200">
                    <Building2 size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-lg leading-tight mb-1">
                      NSTP–NUST
                    </p>
                    <p className="text-text-secondary text-sm">
                      National Science and Technology Park
                    </p>
                    <p className="text-accent text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Design · Delivery · Mentorship →
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Divider */}
              <div className="flex sm:flex-col items-center justify-center">
                <span className="text-2xl font-light text-text-muted select-none">×</span>
              </div>

              {/* AKD Group card */}
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(107,143,62,0.15)' }}
                transition={{ duration: 0.2 }}
                className="flex-1 group relative overflow-hidden border border-card-border rounded-xl px-7 py-6 cursor-default bg-bg transition-colors duration-200 hover:border-accent hover:bg-accent-light"
              >
                {/* Green left accent */}
                <span className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-light border border-[#C5D9A0] flex items-center justify-center shrink-0 group-hover:bg-white transition-colors duration-200">
                    <TrendingUp size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-lg leading-tight mb-1">
                      AKD Group
                    </p>
                    <p className="text-text-secondary text-sm">
                      Capital &amp; Global Industry Network
                    </p>
                    <p className="text-accent text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Capital · Introductions · Growth →
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
