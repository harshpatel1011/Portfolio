import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="font-heading font-extrabold text-2xl tracking-tighter mb-2 text-white">
            Harsh<span className="text-cyan-400">.</span>
          </div>
          <p className="text-slate-500 text-sm font-light">
            © {new Date().getFullYear()} Harsh Patel. All rights reserved. <br className="md:hidden" />
            <span className="hidden md:inline"> • </span>
            Designed & Built with passion.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/harshpatel1011" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 hoverable">
            <FaGithub className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/harshpatel1111" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 hoverable">
            <FaLinkedin className="w-4 h-4" />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="hoverable w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 md:-mr-4"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

      </div>
    </footer>
  );
};
