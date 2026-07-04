import { Award, Trophy, Medal, Star } from 'lucide-react';
import Reveal from './Reveal';

const awards = [
  {
    title: 'National Finalist',
    event: 'DOST Level Up 2.0: Esports Game Dev Challenge',
    time: 'Dec 2025',
    icon: <Trophy className="text-yellow-500" size={24} />,
    details:
      'Recognized among the nation’s top teams for innovation, collaborative development, and software implementation.',
    featured: true,
  },
  {
    title: 'First Place — Overall Champion',
    event: 'Ateneo de Naga University Software Festival 2025',
    time: 'Oct 2025',
    icon: <Medal className="text-yellow-400" size={24} />,
    details:
      'Top 1 overall, plus Best in Innovation, Functionality, User Experience, Societal Impact, and Visual Design.',
    featured: true,
  },
  {
    title: 'First Honors',
    event: 'Ateneo de Naga University',
    time: 'SY 2025–2026, 1st Sem',
    icon: <Award className="text-blue-400" size={24} />,
  },
  {
    title: 'Second Honors',
    event: 'Ateneo de Naga University',
    time: 'SY 2024–2025',
    icon: <Award className="text-slate-300" size={24} />,
  },
  {
    title: "President's Lister",
    event: 'Ateneo de Naga University',
    time: 'SY 2023–2024',
    icon: <Award className="text-purple-400" size={24} />,
  },
  {
    title: 'Naga City Scholar',
    event: 'City Government of Naga',
    time: 'Since 2023',
    icon: <Star className="text-emerald-400" size={24} />,
  },
];

const Awards = () => {
  return (
    <section id="awards" className="bg-dark relative">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Honors & <span>Awards</span></h2>
          <p className="section-subtitle">
            Recognition earned across national competitions and academic excellence.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <Reveal
              key={award.title}
              delay={index * 70}
              className={award.featured ? 'md:col-span-1' : ''}
            >
              <div
                className={`card flex gap-4 h-full ${
                  award.featured ? 'border-primary/40' : ''
                }`}
              >
                <div className="shrink-0 mt-1">{award.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-light font-display">{award.title}</h3>
                  <p className="text-primary font-medium text-sm mb-1">
                    {award.event}
                    {award.time && (
                      <span className="text-slate-500 font-normal"> · {award.time}</span>
                    )}
                  </p>
                  {award.details && (
                    <p className="text-slate-400 text-sm mt-2">{award.details}</p>
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

export default Awards;
