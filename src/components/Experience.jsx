import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-dark relative">
      <div className="section-container">
        <h2 className="section-title">Professional <span>Experience</span></h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 -ml-0.5 w-px h-full bg-slate-800"></div>
            <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-slate-800"></div>

            {/* Experience Item */}
            <div className="relative mb-10 md:w-1/2 md:ml-auto md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-10 md:-left-3.5 top-1 w-7 h-7 rounded-full bg-secondary border-4 border-dark flex items-center justify-center shadow-[0_0_0_2px_rgba(59,130,246,1)] z-10">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>

              <div className="card text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-light flex items-center gap-2">
                    <Briefcase size={18} className="text-primary hidden md:inline-block" />
                    Full-Stack Developer & Game Developer
                  </h3>
                  <span className="text-primary text-sm font-medium mt-1 md:mt-0 whitespace-nowrap">August 2025 – Present</span>
                </div>
                
                <h4 className="text-slate-400 font-medium mb-4 flex items-center justify-between">
                  Calamity Crew
                  <span className="text-xs px-2 py-1 bg-dark rounded-md text-slate-500 hidden sm:inline-block">Naga City, Camarines Sur</span>
                </h4>
                
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>Collaborated with a student-led development team participating in school and regional competitions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>Designed and implemented menus, leaderboards, and achievement interfaces</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>Assisted in feature development and gameplay system implementation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>Participated in testing, debugging, and user experience improvements</span>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
