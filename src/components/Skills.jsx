import React from 'react';
import { Code, Layout, Server, Wrench, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code className="text-primary mb-4" size={28} />,
      skills: ['C', 'C++', 'C#', 'Java', 'Python', 'JavaScript']
    },
    {
      title: 'Web & App Dev',
      icon: <Layout className="text-accent mb-4" size={28} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
    },
    {
      title: 'Networking & Systems',
      icon: <Server className="text-purple-500 mb-4" size={28} />,
      skills: ['TCP/IP', 'DNS', 'Linux', 'Windows', 'OS Administration']
    },
    {
      title: 'Technical Skills',
      icon: <Settings className="text-orange-500 mb-4" size={28} />,
      skills: ['Database Design', 'System Analysis', 'Software Testing', 'Tech Documentation']
    },
    {
      title: 'Tools',
      icon: <Wrench className="text-pink-500 mb-4" size={28} />,
      skills: ['GitHub', 'Unreal Engine', 'Unity']
    }
  ];

  return (
    <section id="skills" className="bg-secondary relative">
      <div className="section-container">
        <h2 className="section-title">My <span>Skills</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card group">
              {category.icon}
              <h3 className="text-xl font-bold text-light mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-dark/50 text-slate-300 text-sm rounded-full border border-slate-700/50 group-hover:border-slate-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
