'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';

export function About() {
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
      id="about"
      className="py-20 md:py-32 bg-autumn-100 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left: Images */}
          <motion.div className="grid grid-cols-2 gap-4" variants={itemVariants}>
            {portfolioData.decorativeImages.about.map((image, index) => (
              <motion.div
                key={index}
                className={`relative rounded-2xl overflow-hidden shadow-lg ${
                  index === 0 ? 'col-span-2 h-64' : 'h-48'
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={image}
                  alt={`Decorative ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Content */}
          <motion.div className="flex flex-col gap-6" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-autumn-brown mb-4">
                About Me
              </h2>
              <div className="w-16 h-1 bg-autumn-orange rounded-full"></div>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-autumn-brown/80 leading-relaxed"
              variants={itemVariants}
            >
              {portfolioData.bio}
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              <div>
                <p className="text-autumn-olive font-semibold text-sm uppercase tracking-wide">
                  Education
                </p>
                <p className="text-lg text-autumn-brown">{portfolioData.school}</p>
              </div>

              <div>
                <p className="text-autumn-olive font-semibold text-sm uppercase tracking-wide">
                  Field of Study
                </p>
                <p className="text-lg text-autumn-brown">Visual Communication Design</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <motion.a
                href="#portfolio"
                className="inline-block px-8 py-3 bg-autumn-orange text-white rounded-full font-semibold hover:bg-autumn-terracotta transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See My Work
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
