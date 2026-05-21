import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50"></div>

      <div className="section-container relative z-10 w-full">
        <div className="max-w-3xl">
          <p className="text-primary font-mono font-semibold tracking-widest uppercase text-sm mb-6 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-primary/80"></span>
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-light mb-4 leading-tight">
            JOE CARLO JR. O. BARANDON
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
            I am a Software Developer.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Computer Science student passionate about software development, UI/UX, and building user-focused applications.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline flex items-center gap-2">
              Contact Me <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
