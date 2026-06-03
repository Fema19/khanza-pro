'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-autumn-50/95 backdrop-blur-sm border-b border-autumn-150"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" className="text-2xl font-bold text-autumn-brown">
              KA
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-autumn-brown hover:text-autumn-orange transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-autumn-brown" />
            ) : (
              <Menu className="w-6 h-6 text-autumn-brown" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-autumn-brown hover:text-autumn-orange transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
