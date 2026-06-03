'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';

export function Portfolio() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

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
      className="py-20 md:py-32 bg-autumn-100 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-20"
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

        {/* Asymmetrical Masonry Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {portfolioData.portfolio.map((work, index) => (
            <motion.div
              key={work.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                index === 0 ? 'lg:col-span-1 lg:row-span-2' : ''
              }`}
              variants={itemVariants}
              layoutId={`portfolio-${work.id}`}
              onClick={() => setSelectedId(work.id)}
              whileHover={{ scale: 0.98 }}
            >
              {/* Parallax Container */}
              <motion.div
                className="relative w-full h-80 md:h-96 lg:h-full overflow-hidden"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-autumn-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1">
                      {work.title}
                    </h3>
                    <p className="text-autumn-100 text-sm">{work.category}</p>
                  </div>
                </motion.div>

                {/* Hover Icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <span className="text-autumn-orange text-2xl font-bold">+</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {portfolioData.portfolio
                .filter((work) => work.id === selectedId)
                .map((work) => (
                  <Image
                    key={work.id}
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                ))}

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
                {portfolioData.portfolio
                  .filter((work) => work.id === selectedId)
                  .map((work) => (
                    <div key={work.id}>
                      <h3 className="text-2xl font-bold mb-1">{work.title}</h3>
                      <p className="text-autumn-100">{work.category}</p>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
