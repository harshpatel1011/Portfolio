import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';

const row1 = ["HTML5", "CSS3", "React JS", "Tailwind CSS", "JavaScript", "Python", "Django", "PostgreSQL", "Git", "VS Code", "Vercel"];
const row2 = ["C++", "C", "MySQL", "SQLite", "jQuery", "Postman", "GitHub", "Render", "Claude", "Gemini", "ChatGPT", "GitHub Copilot"];

export const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-slate-950 py-24 relative overflow-hidden">
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
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-20 reveal-up opacity-0 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-cyan-500/50"></div>
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">04. Arsenal</span>
            <div className="w-8 h-[1px] bg-cyan-500/50"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">Technical Expertise</h2>
        </div>

        <div className="relative flex flex-col gap-6 overflow-hidden w-full reveal-up opacity-0 py-4">
          
          <style dangerouslySetInnerHTML={{__html: `
            .marquee-container {
              display: flex;
              width: max-content;
              animation: scroll 35s linear infinite;
            }
            .marquee-container:hover {
              animation-play-state: paused;
            }
            .marquee-container-reverse {
              display: flex;
              width: max-content;
              animation: scroll-reverse 35s linear infinite;
            }
            .marquee-container-reverse:hover {
              animation-play-state: paused;
            }
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes scroll-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
          `}} />

          {/* Mask for fading edges */}
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #020617 0%, transparent 15%, transparent 85%, #020617 100%)' }}></div>

          {/* Row 1 */}
          <div className="flex overflow-hidden">
            <div className="marquee-container gap-4 pr-4">
              {[...row1, ...row1].map((skill, idx) => (
                <div 
                  key={idx}
                  className="px-6 py-3 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-full text-slate-300 font-medium whitespace-nowrap hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex overflow-hidden">
            <div className="marquee-container-reverse gap-4 pr-4">
              {[...row2, ...row2].map((skill, idx) => (
                <div 
                  key={idx}
                  className="px-6 py-3 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-full text-slate-300 font-medium whitespace-nowrap hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};
