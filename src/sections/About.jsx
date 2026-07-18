import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { FileText } from 'lucide-react';
import CV from '../assets/HarshPatel.pdf';

export const About = () => {
  return (
    <SectionWrapper id="about" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <div className="space-y-8">
          <div className="inline-flex reveal-up opacity-0">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">01. About Me</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-semibold reveal-up opacity-0">
            Bridging the gap between <span className="text-gradient">design & engineering.</span>
          </h2>
          
          <div className="space-y-6 text-foreground/70 text-lg reveal-up opacity-0 font-light leading-relaxed">
            <p>
              I am a Frontend Developer passionate about creating interactive and responsive web experiences. 
              I love turning ideas into scalable applications with clean, maintainable, and efficient code.
            </p>
            <p>
              While my core expertise is in React and modern frontend technologies, I'm constantly learning 
              and expanding my skills into backend development with Python, Django, and MySQL to build 
              complete full-stack solutions.
            </p>
          </div>
          
          <div className="pt-4 reveal-up opacity-0 flex flex-wrap items-center gap-6">
            <a href="https://github.com/harshpatel1011" target="_blank" rel="noreferrer" className="hoverable text-primary border-b border-primary/50 hover:border-primary pb-1 transition-colors">
              Read the full story &rarr;
            </a>
            <a href={CV} target="_blank" rel="noreferrer" className="hoverable px-6 py-2.5 bg-primary/10 text-primary font-medium rounded-full border border-primary/30 hover:bg-primary/20 transition-colors flex items-center gap-2 text-sm shadow-[0_0_15px_rgba(170,59,255,0.1)]">
              <FileText className="w-4 h-4" />
              View CV
            </a>
          </div>
        </div>
        
        {/* Visual elements */}
        <div className="relative h-[500px] w-full rounded-3xl reveal-up opacity-0 group">
          {/* Glowing Gradient Background */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />
          
          <div className="relative w-full h-full rounded-3xl bg-[#0a0510] border border-white/10 flex flex-col p-8 md:p-10 overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
            {/* Grid pattern background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 relative z-10">
              <div className="flex gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29]" />
              </div>
              <div className="text-xs font-mono text-white/40 tracking-wider">about-me.js</div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center relative z-10 pl-6 md:pl-8 border-l-2 border-primary/40">
              <span className="absolute -top-10 -left-2 text-primary/10 text-9xl font-serif leading-none pointer-events-none">"</span>
              <p className="font-heading text-2xl md:text-3xl font-light text-white/90 leading-relaxed z-10">
                Great user experiences are built with <span className="text-primary font-medium">clean code</span>, creativity, and <span className="text-white font-medium">continuous learning</span>.
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-xs tracking-widest shadow-[0_0_15px_rgba(170,59,255,0.2)]">
                  <span className="opacity-70">console.log(</span>'Welcome to My World'<span className="opacity-70">)</span>
                </div>
              </div>
            </div>

            {/* Decorative Glowing Orbs */}
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/20 rounded-full blur-[120px] pointer-events-none group-hover:bg-primary/40 transition-colors duration-1000" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
