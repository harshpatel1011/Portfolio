import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const links = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience & Education', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 md:px-12 md:py-6"
    >
      <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex justify-between items-center">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-heading font-bold text-xl tracking-tighter hoverable text-left"
        >
          Harsh<span className="text-primary">.</span>
        </button>
        
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors hoverable"
            >
              {link.name}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollTo('contact')}
          className="px-5 py-2 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 rounded-full text-sm font-medium hoverable"
        >
          Let's Talk
        </button>
      </div>
    </motion.nav>
  );
};
