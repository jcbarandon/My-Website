import { Briefcase, BrainCircuit, Gamepad2 } from 'lucide-react';
import Reveal from './Reveal';

const experiences = [
  {
    role: 'Junior Applications Programmer',
    company: 'Ateneo de Naga University',
    period: '06/2026 – Present',
    location: 'Naga City, Philippines',
    icon: <Briefcase size={18} />,
    tag: 'Enterprise',
    points: [
      'Collaborate with Senior Applications Programmers to build and maintain applications used across Ateneo de Naga University.',
      'Help maintain existing systems and shape development plans that move the university toward its smart-campus initiatives.',
    ],
    tech: ['Systems Maintenance', 'Application Development'],
  },
  {
    role: 'AI / LLM Consultant (Tagalog)',
    company: 'Outlier',
    period: '06/2026 – 07/2026',
    location: 'Oakland, California · Remote',
    icon: <BrainCircuit size={18} />,
    tag: 'AI / ML',
    points: [
      'Trained multilingual AI systems and LLMs on the Filipino language, applying machine-learning concepts to understand cross-lingual model behavior.',
      'Reviewed and refined model outputs to make LLMs safer, more accurate, and more reliable.',
    ],
    tech: ['LLM Training', 'Multilingual NLP', 'Model Evaluation'],
  },
  {
    role: 'Software Developer · UI/UX Programmer',
    company: 'Calamity Crew',
    period: 'Aug 2025 – 06/2026',
    location: 'Naga City, Camarines Sur',
    icon: <Gamepad2 size={18} />,
    tag: 'Game Dev',
    points: [
      'Collaborated with a student-led development team competing in school and regional competitions.',
      'Designed and implemented interactive application interfaces and system features — menus, score systems, and leaderboards.',
      'Drove feature implementation, testing, debugging, and iterative usability enhancements.',
    ],
    tech: ['Unity', 'C#', 'UI/UX Design', 'Game Systems'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-dark relative">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Professional <span>Experience</span></h2>
          <p className="section-subtitle">
            From enterprise applications to applied AI and competitive game development.
          </p>
        </Reveal>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline rail */}
          <div className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-slate-700 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Reveal key={exp.role} delay={index * 100}>
                <div className="relative pl-14 md:pl-16">
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-9 h-9 md:w-11 md:h-11 rounded-full bg-secondary border border-slate-700 grid place-items-center text-primary shadow-[0_0_0_4px_#0f172a]">
                    {exp.icon}
                  </div>

                  <div className="card text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold text-light font-display">{exp.role}</h3>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap self-start">
                        {exp.tag}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mb-4">
                      <span className="text-accent font-medium">{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-500">{exp.period}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-500">{exp.location}</span>
                    </div>

                    <ul className="space-y-2.5 text-slate-300 text-sm mb-5">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-primary mt-1 shrink-0">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="text-xs font-mono text-slate-400 bg-dark/60 px-2.5 py-1 rounded-md border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
