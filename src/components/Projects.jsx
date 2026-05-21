import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';


const Projects = () => {
  const projects = [
    {
      title: 'BayanWorks',
      description: 'A Community-Based Job Finder System designed to connect local workers with job opportunities in their area.',
      skills: ['React.js', 'Node.js', 'Tailwind CSS', 'System Design'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Calamity Dash',
      description: 'A 3D Game Collection featuring various calamity-related mini-games built for educational and entertainment purposes.',
      skills: ['Unity', 'C#', '3D Modeling', 'Game Design'],
      github: '#',
      demo: '#'
    },
    {
      title: 'StayConnect',
      description: 'A comprehensive Vacation Rental Booking Application allowing users to find and book accommodations seamlessly.',
      skills: ['JavaScript', 'HTML/CSS', 'Database Design'],
      github: '#',
      demo: '#'
    },
    {
      title: 'ShopTeneo',
      description: 'A Merch Tracker Platform specifically developed for school departments to manage and sell their merchandise.',
      skills: ['React.js', 'UI/UX', 'Web Development'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Scratched IT',
      description: 'A creative collection of 15 unique mini-games developed using Scratch, showcasing foundational programming logic.',
      skills: ['Scratch', 'Game Logic', 'Creative Design'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="bg-secondary relative">
      <div className="section-container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card group flex flex-col h-full bg-dark">
              <div className="flex justify-between items-start mb-6">
                <Folder className="text-primary" size={36} />
                <div className="flex gap-3 text-slate-400">
                  <a href={project.github} className="hover:text-primary transition-colors" aria-label="GitHub Link">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.demo} className="hover:text-primary transition-colors" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-light mb-3 group-hover:text-primary transition-colors">
                <a href={project.demo} className="before:content-[''] before:absolute before:inset-0">{project.title}</a>
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-slate-500 mt-auto">
                {project.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
