import React from 'react';
import { User } from 'lucide-react';
import meImage from '../assets/me.jpg';

const About = () => {
  return (
    <section id="about" className="bg-slate-900">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
          <User className="text-primary" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-light m-0">About <span>Me</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-slate-300 leading-relaxed text-lg space-y-6">
            <p>
              I am a Third-Year BS Computer Science student with experience in application development, UI/UX implementation, and collaborative software projects.
            </p>
            <p>
              Skilled in developing user-focused applications using JavaScript, React.js, and modern development tools, with foundational knowledge in networking, systems analysis, and technology implementation.
            </p>
            <div className="pt-4">
              <a href="#contact" className="text-primary hover:text-blue-400 font-medium inline-flex items-center gap-2 group transition-colors">
                Let's work together
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          <div className="relative group">
            {/* Image placeholder or decorative element */}
            <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl bg-secondary border-2 border-slate-700 overflow-hidden relative shadow-2xl group-hover:border-primary/50 transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
              <img
                src={meImage}
                alt="Joe Carlo Jr. O. Barandon"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] [background-size:16px_16px] opacity-20 -z-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
