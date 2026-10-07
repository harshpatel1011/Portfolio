import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineData = [
  {
    id: 1,
    title: "Intern",
    company: "Creative Design & Multimedia Institute",
    period: "Sep 2025 - May 2026",
    description: "Frontend web development internship, gaining hands-on experience in modern web technologies.",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    id: 2,
    title: "Bachelor of Computer Applications",
    company: "Swarnim Startup & Innovation University, Gandhinagar",
    period: "06/2025 - Present",
    description: "Pursuing Bachelor's degree in Computer Applications.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    id: 3,
    title: "HSC (Higher Secondary Certificate)",
    company: "Sheth Nanubhai Vidhyamandir, New Naroda, Ahmedabad",
    period: "03/2025",
    description: "Completed higher secondary education.",
    icon: <GraduationCap className="w-5 h-5" />
  }
];

export const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-slate-950 relative overflow-hidden py-24">
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
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="text-center mb-24 reveal-up opacity-0 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-cyan-500/50"></div>
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">03. Timeline</span>
            <div className="w-8 h-[1px] bg-cyan-500/50"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">Experience & Education</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-blue-500/20 to-transparent -translate-x-1/2 hidden md:block" />
          <div className="absolute left-[39px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-blue-500/20 to-transparent md:hidden" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} reveal-up opacity-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 top-0 translate-x-[-50%] w-12 h-12 rounded-full bg-slate-900 border-2 border-cyan-500/50 flex items-center justify-center z-10 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 pl-24 md:pl-0">
                  <div className={`w-full ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300 group">
                      <span className="text-cyan-400 font-mono text-sm mb-3 block">{item.period}</span>
                      <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                      <h4 className="text-slate-400 font-medium mb-4">{item.company}</h4>
                      <p className="text-slate-300 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
