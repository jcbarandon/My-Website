import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';
import Reveal from './Reveal';

const education = [
  {
    school: 'Ateneo de Naga University',
    degree: 'BS Computer Science',
    year: 'Expected 2027',
    gpa: '3.79 QPI',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Software Engineering',
      'Systems Analysis & Design',
      'Information Management',
      'Web Development',
    ],
    honors: ["President's Lister", 'Second Honors', 'First Honors', 'Naga City Scholar'],
  },
  {
    school: 'Naga City Science High School',
    degree: 'STEM Strand',
    year: 'Graduated 2023',
    gpa: 'With Honors',
    coursework: [],
    honors: ['Consistent Honor Student', 'Perfect Attendance Award'],
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-secondary relative">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">My <span>Education</span></h2>
        </Reveal>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Reveal key={edu.school} delay={index * 100}>
              <div className="card bg-dark">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0">
                    <GraduationCap size={36} />
                  </div>

                  <div className="flex-grow w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-light font-display">{edu.school}</h3>
                        <p className="text-lg text-slate-300 font-medium my-1">{edu.degree}</p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <Calendar size={14} />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                      <span className="inline-block px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-lg text-sm font-bold whitespace-nowrap self-start">
                        {edu.gpa}
                      </span>
                    </div>

                    {edu.coursework.length > 0 && (
                      <div className="mt-5">
                        <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 mb-2 font-mono">
                          <BookOpen size={13} /> Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((c) => (
                            <span key={c} className="chip text-xs">{c}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-5">
                      <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 mb-2 font-mono">
                        <Award size={13} /> Honors
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.honors.map((h) => (
                          <span key={h} className="text-xs font-medium text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
