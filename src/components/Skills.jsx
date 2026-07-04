import { Code, Layout, Server, BrainCircuit, ClipboardCheck, Wrench } from 'lucide-react';
import Reveal from './Reveal';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code size={28} />,
    color: 'text-primary',
    skills: ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'C'],
  },
  {
    title: 'Frontend & UI/UX',
    icon: <Layout size={28} />,
    color: 'text-accent',
    skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Backend & Data',
    icon: <Server size={28} />,
    color: 'text-accent2',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Database Design', 'Azure Services'],
  },
  {
    title: 'AI / Machine Learning',
    icon: <BrainCircuit size={28} />,
    color: 'text-pink-400',
    skills: ['LLM Training', 'Model Evaluation', 'Multilingual NLP', 'Prompt Engineering', 'Data Annotation'],
  },
  {
    title: 'Practices',
    icon: <ClipboardCheck size={28} />,
    color: 'text-orange-400',
    skills: ['Software Testing', 'Systems Analysis', 'Technical Documentation', 'Agile Collaboration'],
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={28} />,
    color: 'text-cyan-400',
    skills: ['Git', 'GitHub', 'Unity', 'Linux', 'Windows'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary relative">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">My <span>Skills</span></h2>
          <p className="section-subtitle">
            A toolkit built across coursework, competitions, and real client work — spanning
            full-stack development, applied AI, and game design.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 80}>
              <div className="card group h-full">
                <div className={`${category.color} mb-4`}>{category.icon}</div>
                <h3 className="text-xl font-bold text-light mb-4 font-display">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="chip group-hover:border-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
