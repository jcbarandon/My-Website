import React from 'react';
import { Users, UserCheck } from 'lucide-react';

const Leadership = () => {
  const activities = [
    {
      organization: "AdNU Gabay Scholars' Organization",
      role: 'Member'
    },
    {
      organization: 'Naga City Scholars Guild',
      role: 'Member'
    },
    {
      organization: 'Zonta Club',
      role: 'Treasurer'
    },
    {
      organization: 'YES-O Club',
      role: 'Public Information Officer'
    },
    {
      organization: 'YES-O Club',
      role: 'Auditor'
    }
  ];

  return (
    <section id="leadership" className="bg-dark relative">
      <div className="section-container">
        <h2 className="section-title">Leadership & <span>Activities</span></h2>
        
        <div className="max-w-3xl mx-auto bg-secondary p-8 rounded-2xl border border-slate-700 shadow-xl">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-700">
            <Users className="text-primary" size={32} />
            <h3 className="text-2xl font-bold text-light">Organizations</h3>
          </div>
          
          <ul className="space-y-4">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start sm:items-center justify-between flex-col sm:flex-row p-4 hover:bg-dark/50 rounded-lg transition-colors border border-transparent hover:border-slate-700">
                <div className="flex items-center gap-3">
                  <UserCheck className="text-accent shrink-0" size={18} />
                  <span className="text-light font-medium text-lg">{activity.organization}</span>
                </div>
                <span className="text-primary mt-2 sm:mt-0 font-mono text-sm px-3 py-1 bg-primary/10 rounded-full">
                  {activity.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
