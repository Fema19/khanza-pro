'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Palette, Layers, Box, Film } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const iconMap = {
  Palette,
  Layers,
  Box,
  Film,
};

export function Skills() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-autumn-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative Images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 rounded-full overflow-hidden opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Image
            src={portfolioData.decorativeImages.skills[0]}
            alt="Decorative"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-10 w-40 h-40 rounded-full overflow-hidden opacity-15"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        >
          <Image
            src={portfolioData.decorativeImages.skills[1]}
            alt="Decorative"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-autumn-brown mb-4"
            variants={cardVariants}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-autumn-orange rounded-full mx-auto"
            variants={cardVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {portfolioData.skills.map((skill) => {
            const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={skill.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
                variants={cardVariants}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="text-autumn-orange mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <IconComponent className="w-12 h-12" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-bold text-autumn-brown mb-2">
                  {skill.name}
                </h3>
                <p className="text-autumn-brown/60 text-sm">
                  Specialized in creating impactful designs and visual content
                </p>
                <motion.div
                  className="mt-4 h-1 bg-autumn-orange rounded-full w-0 group-hover:w-full transition-all duration-300"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Decorative accent image */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg opacity-30 hidden lg:block">
            <Image
              src={portfolioData.decorativeImages.skills[2]}
              alt="Decorative"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
