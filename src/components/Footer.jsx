import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">
          &copy; {currentYear} Joe Carlo Jr. O. Barandon. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm flex items-center gap-1">
          Built with <span className="text-primary">React</span> & <span className="text-accent">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
