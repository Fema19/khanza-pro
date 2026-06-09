'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-autumn-50 flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute left-4 top-24 h-28 w-28 overflow-hidden rounded-full opacity-55 shadow-xl ring-4 ring-autumn-100/70 sm:h-40 sm:w-40 md:left-10 md:top-28"
          animate={{ y: [0, 18, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Image
            src={portfolioData.decorativeImages.hero[0]}
            alt=""
            width={160}
            height={160}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-24 right-3 h-32 w-24 overflow-hidden rounded-3xl opacity-45 shadow-xl ring-4 ring-white/50 sm:right-8 sm:h-48 sm:w-36 lg:right-20"
          animate={{ y: [0, -16, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 0.6 }}
        >
          <Image
            src={portfolioData.decorativeImages.hero[1]}
            alt=""
            width={144}
            height={192}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Profile Photo with Arch Frame */}
          <motion.div
            className="flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96">
              {/* Decorative arch frame */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 300 400"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="archGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#C8744F" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#B76342" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <path
                  d="M 50 50 Q 150 20 250 50 L 250 380 Q 150 350 50 380 Z"
                  stroke="url(#archGradient)"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>

              {/* Profile Image */}
              <div className="relative w-full h-full p-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/profile/Profile.JPG.jpeg"
                    alt="Khanza Azalina"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-autumn-brown leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Khanza
                <br />
                <span className="text-autumn-orange">Azalina</span>
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-2xl md:text-3xl text-autumn-olive font-light">
                Visual Communication Design Student
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-autumn-brown/80 leading-relaxed">
                Illustration • Graphic Design • 3D Art • Video Editing
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              <motion.a
                href="#portfolio"
                className="px-8 py-3 bg-autumn-orange text-white rounded-full font-semibold hover:bg-autumn-terracotta transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border-2 border-autumn-orange text-autumn-orange rounded-full font-semibold hover:bg-autumn-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-16 md:mt-24"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-autumn-brown/50 hover:text-autumn-brown transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
