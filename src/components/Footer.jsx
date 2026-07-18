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
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="font-heading font-bold text-2xl tracking-tighter mb-2">
            Harsh<span className="text-primary">.</span>
          </div>
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Harsh Patel. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/harshpatel1011" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors hoverable">
            <FaGithub className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/harshpatel1111" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors hoverable">
            <FaLinkedin className="w-4 h-4" />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="hoverable w-12 h-12 rounded-full glass border flex items-center justify-center border-white/10 hover:border-primary/50 text-foreground/50 hover:text-primary transition-all md:-mr-4"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

      </div>
    </footer>
  );
};
