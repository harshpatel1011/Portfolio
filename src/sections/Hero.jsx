import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', 
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
          }} 
        />
        
        {/* Glowing Orbs - Cyan & Blue */}
        <motion.div 
          animate={{ 
            rotate: 360,
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 pointer-events-none"
        >
          <div className="absolute top-0 left-1/4 w-[28rem] h-[28rem] bg-cyan-500 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-blue-600 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-500 rounded-full blur-[120px] mix-blend-screen" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md text-sm font-medium text-cyan-50 tracking-wide"
        >
          <span className="text-cyan-400">👋</span>
          <span>Hi, I'm Harsh Patel — Software Engineer</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-extrabold tracking-tight mb-6 leading-[1.05]"
        >
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400">Next-Gen</span> <br className="hidden md:block" /> Web Solutions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10 font-light leading-relaxed"
        >
          I transform complex problems into elegant, scalable, and performant digital experiences. Let's build something amazing together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <a
            href="#projects"
            className="hoverable px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="hoverable px-8 py-4 bg-white/5 text-white border border-white/10 font-medium rounded-full hover:bg-white/10 backdrop-blur-sm transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Modern Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-2 bg-cyan-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
