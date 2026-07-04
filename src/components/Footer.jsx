
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5 text-center">
        <a href="#hero" className="group" aria-label="Back to top">
          <img
            src="/logo.png"
            alt="Joe Barandon logo"
            className="h-16 w-16 rounded-full ring-1 ring-slate-800 group-hover:ring-primary/60 transition"
          />
        </a>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Joe Carlo Jr. O. Barandon. All rights reserved.
          </p>
          <span className="hidden md:inline text-slate-700">•</span>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Built with <span className="text-primary">React</span> & <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
