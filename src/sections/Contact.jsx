import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-slate-950 relative overflow-hidden py-32 min-h-screen flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at center, white 1.5px, transparent 1.5px)', 
            backgroundSize: '32px 32px',
          }} 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-3 mb-6 reveal-up opacity-0">
          <div className="w-8 h-[1px] bg-cyan-500/50"></div>
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">05. What's Next?</span>
          <div className="w-8 h-[1px] bg-cyan-500/50"></div>
        </div>
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white mb-8 tracking-tight reveal-up opacity-0 leading-tight">
          Get In Touch.
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mb-16 reveal-up opacity-0">
          I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:harshpatel6342@gmail.com"
          className="group relative inline-flex items-center justify-center gap-3 sm:gap-4 px-5 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 bg-slate-900/50 backdrop-blur-md rounded-full border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 transition-all duration-500 reveal-up opacity-0 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] max-w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-cyan-400 group-hover:scale-110 transition-transform duration-500 relative z-10" />
          <span className="text-sm sm:text-xl md:text-3xl font-medium text-white relative z-10 truncate">harshpatel6342@gmail.com</span>
        </a>


      </div>
    </SectionWrapper>
  );
};
