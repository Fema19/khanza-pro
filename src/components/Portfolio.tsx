'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';

export function Portfolio() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedWork = portfolioData.portfolio.find((work) => work.id === selectedId);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-autumn-100 px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -left-8 top-24 hidden h-44 w-36 overflow-hidden rounded-[2rem] opacity-45 shadow-xl ring-4 ring-white/50 md:block"
          animate={{ y: [0, 16, 0], rotate: [-4, 0, -4] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Image
            src={portfolioData.decorativeImages.about[1]}
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          className="absolute -right-10 bottom-16 hidden h-52 w-52 overflow-hidden rounded-full opacity-40 shadow-xl ring-4 ring-autumn-50/70 lg:block"
          animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: 0.4 }}
        >
          <Image
            src={portfolioData.decorativeImages.skills[1]}
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-autumn-brown mb-4"
            variants={itemVariants}
          >
            Portfolio
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-autumn-orange rounded-full mx-auto"
            variants={itemVariants}
          ></motion.div>
          <motion.p
            className="mt-6 text-lg text-autumn-brown/70"
            variants={itemVariants}
          >
            A curated selection of my creative works
          </motion.p>
        </motion.div>

        {/* Editorial Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.25fr_0.875fr_0.875fr] lg:gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {portfolioData.portfolio.map((work, index) => {
            const isLead = index === 0;

            return (
              <motion.div
                key={work.id}
                className={`group relative h-[320px] overflow-hidden rounded-[2rem] bg-autumn-brown shadow-xl shadow-autumn-brown/20 ring-1 ring-white/50 cursor-pointer md:h-[420px] lg:h-[520px] ${
                  index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                variants={itemVariants}
                layoutId={`portfolio-${work.id}`}
                onClick={() => setSelectedId(work.id)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes={
                    isLead
                      ? '(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw'
                      : '(min-width: 1024px) 29vw, (min-width: 768px) 50vw, 100vw'
                  }
                  priority={isLead}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2E28]/75 via-[#3B2E28]/20 to-transparent" />
                <div className="absolute inset-0 bg-autumn-orange/0 transition-colors duration-500 group-hover:bg-autumn-orange/10" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-autumn-100">
                    Featured Work
                  </p>
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">
                    {work.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-autumn-100">
                    {work.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="relative h-[78vh] max-h-[760px] w-full max-w-6xl overflow-hidden rounded-[2rem] bg-autumn-brown"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedWork.image}
                alt={selectedWork.title}
                fill
                sizes="100vw"
                className="object-contain"
              />

              <motion.button
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedId(null)}
              >
                <X className="w-6 h-6 text-autumn-brown" />
              </motion.button>

              {/* Image info */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-autumn-brown/90 to-transparent p-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-1">{selectedWork.title}</h3>
                  <p className="text-autumn-100">{selectedWork.category}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
