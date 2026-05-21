import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: 'Ateneo de Naga University',
      degree: 'Bachelor of Science in Computer Science',
      year: 'Expected Graduation: 2027',
      details: 'Current QPI: 3.79'
    },
    {
      school: 'Naga City Science High School',
      degree: 'STEM Strand',
      year: 'Graduated: 2023',
      details: 'Graduated with Honors'
    }
  ];

  return (
    <section id="education" className="bg-secondary relative">
      <div className="section-container">
        <h2 className="section-title">My <span>Education</span></h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="card bg-dark flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0">
                <GraduationCap size={40} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-light">{edu.school}</h3>
                <p className="text-lg text-slate-300 font-medium my-1">{edu.degree}</p>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar size={14} />
                  <span>{edu.year}</span>
                </div>
              </div>
              <div className="sm:text-right mt-4 sm:mt-0">
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-lg text-sm font-bold">
                  {edu.details}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
