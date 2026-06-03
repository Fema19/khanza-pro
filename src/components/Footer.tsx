'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-autumn-brown text-autumn-50 py-8 md:py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">{portfolioData.name}</h3>
            <p className="text-autumn-100 text-sm">{portfolioData.title}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-autumn-100">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Follow</h4>
            <ul className="space-y-2 text-sm text-autumn-100">
              <li>
                <a
                  href={`https://instagram.com/${portfolioData.social.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`https://x.com/${portfolioData.social.x}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href={`https://linkedin.com/in/${portfolioData.social.linkedin.toLowerCase().replace(/\s+/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-autumn-terracotta/30 pt-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center text-sm text-autumn-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>
              © {currentYear} {portfolioData.name}. All rights reserved.
            </p>
            <p className="mt-4 md:mt-0">
              Crafted with creativity and passion • Designed & Developed by Khanza
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
