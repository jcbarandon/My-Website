import React from 'react';
import { Award, Trophy, Medal } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'National Finalist',
      event: 'DOST Level Up 2.0: Esports Game Dev Challenge',
      icon: <Trophy className="text-yellow-500" size={24} />,
      details: null
    },
    {
      title: 'First Place',
      event: 'Ateneo de Naga University Software Festival 2025',
      icon: <Medal className="text-yellow-400" size={24} />,
      details: 'Top 1 Overall, Best in Innovation, Best in Functionality, Best in User Experience, Best in Societal Impact, and Best in Visual Design.'
    },
    {
      title: 'First Honors',
      event: 'Ateneo de Naga University',
      time: 'SY 2025–2026 First Semester',
      icon: <Award className="text-blue-400" size={24} />,
      details: null
    },
    {
      title: 'Second Honors',
      event: 'Ateneo de Naga University',
      time: 'SY 2024–2025',
      icon: <Award className="text-slate-400" size={24} />,
      details: null
    },
    {
      title: 'President’s Lister',
      event: 'Ateneo de Naga University',
      time: 'SY 2023–2024',
      icon: <Award className="text-purple-400" size={24} />,
      details: null
    }
  ];

  return (
    <section id="awards" className="bg-dark relative">
      <div className="section-container">
        <h2 className="section-title">Honors & <span>Awards</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <div key={index} className={`card flex gap-4 ${index === 1 ? 'md:col-span-2' : ''}`}>
              <div className="shrink-0 mt-1">
                {award.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-light">{award.title}</h3>
                <p className="text-primary font-medium text-sm mb-2">
                  {award.event} {award.time && <span className="text-slate-500 font-normal">| {award.time}</span>}
                </p>
                {award.details && (
                  <p className="text-slate-400 text-sm mt-2 italic">
                    "{award.details}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
