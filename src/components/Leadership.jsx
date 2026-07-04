import { Users, UserCheck } from 'lucide-react';
import Reveal from './Reveal';

const Leadership = () => {
  const activities = [
    {
      organization: "AdNU Gabay Scholars' Organization",
      role: 'Member',
      period: '2023 – Present'
    },
    {
      organization: 'Naga City Scholars Guild',
      role: 'Member',
      period: '2023 – Present'
    },
    {
      organization: 'Zonta Club',
      role: 'Treasurer',
      period: '2021 – 2022'
    },
    {
      organization: 'YES-O Club',
      role: 'Public Information Officer',
      period: '2021 – 2022'
    },
    {
      organization: 'YES-O Club',
      role: 'Auditor',
      period: '2018 – 2019'
    }
  ];

  return (
    <section id="leadership" className="bg-dark relative">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Leadership & <span>Activities</span></h2>
        </Reveal>

        <Reveal className="max-w-3xl mx-auto bg-secondary p-8 rounded-2xl border border-slate-700 shadow-xl block">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-700">
            <Users className="text-primary" size={32} />
            <h3 className="text-2xl font-bold text-light font-display">Organizations</h3>
          </div>

          <ul className="space-y-3">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-2 p-4 hover:bg-dark/50 rounded-lg transition-colors border border-transparent hover:border-slate-700">
                <div className="flex items-center gap-3">
                  <UserCheck className="text-accent shrink-0" size={18} />
                  <div>
                    <span className="text-light font-medium text-lg block">{activity.organization}</span>
                    <span className="text-slate-500 text-xs font-mono">{activity.period}</span>
                  </div>
                </div>
                <span className="text-primary mt-1 sm:mt-0 font-mono text-sm px-3 py-1 bg-primary/10 rounded-full whitespace-nowrap self-start sm:self-auto">
                  {activity.role}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Leadership;
