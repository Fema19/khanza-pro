'use client';

import { motion } from 'framer-motion';
import { Link as LinkIcon, Mail, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const socialIcons = {
  instagram: LinkIcon,
  x: LinkIcon,
  linkedin: LinkIcon,
};

export function Contact() {
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

  const socials = [
    {
      name: 'Instagram',
      handle: portfolioData.social.instagram,
      url: `https://instagram.com/${portfolioData.social.instagram}`,
      icon: 'instagram',
    },
    {
      name: 'X',
      handle: portfolioData.social.x,
      url: `https://x.com/${portfolioData.social.x}`,
      icon: 'x',
    },
    {
      name: 'LinkedIn',
      handle: portfolioData.social.linkedin,
      url: `https://linkedin.com/in/${portfolioData.social.linkedin.toLowerCase().replace(/\s+/g, '-')}`,
      icon: 'linkedin',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-24 bg-autumn-50 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
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
            Get in Touch
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-autumn-orange rounded-full mx-auto"
            variants={itemVariants}
          ></motion.div>
          <motion.p
            className="mt-6 text-lg text-autumn-brown/70"
            variants={itemVariants}
          >
            Let&apos;s collaborate on something creative
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {socials.map((social) => {
            const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all">
                  <motion.div
                    className="inline-block text-autumn-orange mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <IconComponent className="w-10 h-10" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-autumn-brown mb-2">
                    {social.name}
                  </h3>
                  <p className="text-autumn-brown/60 mb-4 text-sm break-all">
                    @{social.handle}
                  </p>
                  <motion.div
                    className="flex items-center justify-center text-autumn-orange text-sm font-semibold group-hover:translate-x-1 transition-transform"
                    whileHover={{ x: 4 }}
                  >
                    Visit <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants}>
            <p className="text-lg text-autumn-brown/70 mb-6">
              Interested in working together? Feel free to reach out through any of my social channels.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:khanza@example.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-autumn-orange text-white rounded-full font-semibold hover:bg-autumn-terracotta transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </motion.a>

            <motion.a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-autumn-orange text-autumn-orange rounded-full font-semibold hover:bg-autumn-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Portfolio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
