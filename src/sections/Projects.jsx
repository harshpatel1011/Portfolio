import React, { useEffect, useState, useRef } from 'react';
import { fetchGithubRepos } from '../utils/github';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Star, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const loadRepos = async () => {
      const data = await fetchGithubRepos();
      setRepos(data);
      setLoading(false);
    };
    loadRepos();
  }, []);

  useGSAP(() => {
    if (!loading && repos.length > 0) {
      const slider = sliderRef.current;
      
      const getScrollAmount = () => {
        let sliderWidth = slider.scrollWidth;
        return sliderWidth > window.innerWidth ? -(sliderWidth - window.innerWidth) : 0;
      };

      const tween = gsap.to(slider, {
        x: getScrollAmount,
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => {
          const width = slider.scrollWidth;
          return width > window.innerWidth ? `+=${width - window.innerWidth}` : "+=0";
        },
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true
      });
      
      gsap.fromTo('.project-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, [loading, repos]);

  return (
    <section id="projects" ref={containerRef} className="relative h-screen overflow-hidden">
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

      <div className="absolute top-24 left-6 md:left-24 z-10 project-title">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-cyan-500/50"></div>
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">02. Selected Works</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight">
          Showcase.
        </h2>
      </div>

      <div className="absolute top-0 h-full flex items-center pt-24 w-max" ref={sliderRef}>
        <div className="flex gap-8 px-6 md:px-24">
          {loading ? (
             <div className="text-slate-400 font-mono animate-pulse">Fetching projects...</div>
          ) : (
            repos.map((repo, index) => (
              <ProjectCard key={repo.id} repo={repo} index={index} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ repo, index }) => {
  return (
    <div className="w-[280px] md:w-[380px] h-[400px] md:h-[480px] bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col justify-between flex-shrink-0 group relative overflow-hidden border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500">
      
      {/* Background image mockup / Large Index */}
      <div className="absolute top-8 right-8 text-8xl font-heading font-bold text-slate-800/30 group-hover:text-cyan-500/5 transition-colors duration-500 z-0 pointer-events-none select-none">
        0{index + 1}
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="p-2.5 bg-slate-800/50 rounded-xl border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors">
            <FaGithub className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors" />
          </div>
          <div className="flex bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded-full items-center gap-1.5 text-xs font-medium">
            <Star className="w-3 h-3" />
            {repo.stargazers_count}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-heading font-bold text-white mt-4 group-hover:text-cyan-400 transition-colors truncate">
          {repo.name.replace(/-/g, ' ')}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {repo.description || "No description provided for this repository."}
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {repo.topics?.slice(0, 3).map(topic => (
            <span key={topic} className="text-[10px] font-mono px-2.5 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 text-blue-300">
              {topic}
            </span>
          ))}
          {(!repo.topics || repo.topics.length === 0) && repo.language && (
            <span className="text-[10px] font-mono px-2.5 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 text-blue-300">
              {repo.language}
            </span>
          )}
          {repo.topics && repo.topics.length > 3 && (
            <span className="text-[10px] font-mono px-2.5 py-1 bg-slate-800 rounded-full border border-slate-700 text-slate-400">
              +{repo.topics.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="hoverable flex-1 flex justify-center items-center gap-2 py-2.5 text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300"
          >
            Source Code
          </a>
          {repo.homepage ? (
             <a
              href={repo.homepage}
              target="_blank"
              rel="noreferrer"
              className="hoverable w-10 h-10 flex justify-center items-center border border-slate-700 bg-slate-800/50 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors group/link"
            >
              <ExternalLink className="w-4 h-4 text-slate-300 group-hover/link:text-cyan-400 transition-colors" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
