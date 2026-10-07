import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { FileText, ArrowRight } from 'lucide-react';
import CV from '../assets/HarshPatel.pdf';

export const About = () => {
  return (
    <SectionWrapper id="about" className="min-h-screen flex items-center justify-center py-24 relative z-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at center, white 1.5px, transparent 1.5px)', 
            backgroundSize: '32px 32px',
          }} 
        />
        
        {/* Soft Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[130px] translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col items-center text-center relative z-10">
        
        <div className="inline-flex items-center gap-3 mb-12 reveal-up opacity-0">
          <div className="w-12 h-[1px] bg-cyan-500/50"></div>
          <span className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase">01. About Me</span>
          <div className="w-12 h-[1px] bg-cyan-500/50"></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white mb-12 leading-[1.2] reveal-up opacity-0">
          I build digital experiences that are <br className="hidden md:block" /> <span className="italic text-slate-400 font-light">beautiful</span>, functional, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">scalable.</span>
        </h2>
        
        <div className="space-y-8 text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl reveal-up opacity-0">
          <p>
            As a software engineer, my focus is on the intersection of design and engineering. I care deeply about building applications that not only work flawlessly under the hood but also provide intuitive, seamless experiences for the user.
          </p>
          <p>
            Whether I'm crafting modern frontend interfaces with React, or architecting robust backend systems, my goal is always the same: writing clean, maintainable code that solves real problems. I'm constantly exploring new technologies to push the boundaries of what's possible on the web.
          </p>
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-10 reveal-up opacity-0">
          <a href={CV} target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-white font-medium hover:text-cyan-400 transition-colors">
            <span className="border-b border-white/30 group-hover:border-cyan-400 pb-1 transition-all">View My Resume</span>
            <FileText className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          
          <a href="https://github.com/harshpatel1011" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-white font-medium hover:text-cyan-400 transition-colors">
            <span className="border-b border-white/30 group-hover:border-cyan-400 pb-1 transition-all">Explore Github</span>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
          </a>
        </div>
        
      </div>
    </SectionWrapper>
  );
};
