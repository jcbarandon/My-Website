import { ExternalLink, Folder, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Reveal from './Reveal';

const projects = [
  {
    title: 'Calamity Dash',
    category: 'Game Development',
    period: '08/2025 – Present',
    description:
      'A 3D collection of calamity-preparedness mini-games. Built the UI/UX layer — score tracker, leaderboard, and game menus — for the project that won 1st Place at AdNU SoftFest 2025 and reached the DOST national finals.',
    skills: ['Unity', 'C#', 'UI/UX', '3D Game Design'],
    github: 'https://github.com/jcbarandon',
    featured: true,
  },
  {
    title: 'BayanWorks',
    category: 'Full-Stack · Web',
    period: '08/2025 – Present',
    description:
      'A community-based job finder connecting local workers with nearby opportunities. Designed the database structure and application workflows, and drove feature planning, testing, and interface enhancements.',
    skills: ['JavaScript', 'HTML/CSS', 'Azure Services', 'Database Design'],
    github: 'https://github.com/jcbarandon',
    featured: true,
  },
  {
    title: 'StayConnect',
    category: 'MERN · Web App',
    period: '04/2025 – 05/2025',
    description:
      'A vacation rental booking application with user-focused reservation and navigation components. Built booking workflows and frontend interfaces on a full MERN stack.',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/jcbarandon',
  },
  {
    title: 'ShopTeneo',
    category: 'Frontend · Web',
    period: '03/2025 – 05/2025',
    description:
      'A merchandise tracking platform for school departments. Designed and implemented frontend components and improved usability through interface enhancements.',
    skills: ['React.js', 'JavaScript', 'UI/UX'],
    github: 'https://github.com/jcbarandon',
  },
  {
    title: 'Scratched IT',
    category: 'Game Collection',
    period: '09/2023 – 12/2023',
    description:
      'A collection of 15 original 2D mini-games built in Scratch — an early exploration of game logic, interaction design, and creative programming.',
    skills: ['Scratch', 'Game Logic', 'Creative Design'],
    github: 'https://github.com/jcbarandon',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary relative">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">
            Award-winning games, full-stack platforms, and web apps built solo and with teams.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 80}
              className={project.featured ? 'md:col-span-1 lg:col-span-1' : ''}
            >
              <div
                className={`card group flex flex-col h-full bg-dark relative ${
                  project.featured ? 'border-primary/40 shadow-[0_0_20px_rgba(59,130,246,0.15)]' : ''
                }`}
              >
                {project.featured && (
                  <span className="absolute top-4 right-4 flex items-center gap-1 text-[11px] font-mono text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 rounded-full">
                    <Star size={11} className="fill-accent" /> Featured
                  </span>
                )}

                <div className="flex justify-between items-start mb-5">
                  <Folder className="text-primary" size={34} />
                </div>

                <span className="text-xs font-mono text-slate-500 mb-1">
                  {project.category} · {project.period}
                </span>
                <h3 className="text-xl font-bold text-light mb-3 group-hover:text-primary transition-colors font-display">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.skills.map((skill) => (
                    <span key={skill} className="text-xs font-mono text-slate-400 bg-secondary/60 px-2.5 py-1 rounded-md border border-slate-800">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-slate-400 mt-auto pt-4 border-t border-slate-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <FaGithub size={18} /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
