import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import useActiveSection from '../hooks/useActiveSection';

const navLinks = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Awards', href: '#awards', id: 'awards' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md shadow-lg shadow-black/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Joe Barandon logo"
            className="h-10 w-10 rounded-full ring-1 ring-slate-700 group-hover:ring-primary/60 transition"
          />
          <span className="text-2xl font-bold text-light tracking-tighter font-display hidden sm:inline">
            JB<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium tracking-wide uppercase transition-colors ${
                active === link.id ? 'text-primary' : 'text-gray-300 hover:text-primary'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1.5 left-0 h-[2px] bg-primary transition-all duration-300 ${
                  active === link.id ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
          <a
            href="/CV_BARANDON.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium border border-primary/60 text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            <FileText size={16} /> Resume
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary border-t border-slate-800 shadow-xl">
          <div className="flex flex-col py-4 px-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium tracking-wide uppercase py-3 border-b border-slate-800 transition-colors ${
                  active === link.id ? 'text-primary' : 'text-gray-300 hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/CV_BARANDON.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-primary py-3 mt-1"
            >
              <FileText size={16} /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
