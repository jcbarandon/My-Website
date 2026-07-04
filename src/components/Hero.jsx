import { useEffect, useState } from 'react';
import { ArrowRight, Mail, FileText, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ROLES = [
  'Machine Learning Engineer',
  'Applications Developer',
  'UI/UX Programmer',
  'Computer Science Student',
];

/** Types out a word, pauses, deletes it, then moves to the next. */
function useTypingRotator(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 400);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

const stats = [
  { value: '3.79', label: 'Cumulative QPI' },
  { value: '6×', label: 'SoftFest 2025 Awards' },
  { value: 'National', label: 'DOST Finalist' },
  { value: '5+', label: 'Projects Shipped' },
];

const Hero = () => {
  const role = useTypingRotator(ROLES);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 bg-grid"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark pointer-events-none" />
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-float" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-accent2/20 rounded-full blur-3xl opacity-50 animate-float [animation-delay:2s]" />

      <div className="section-container relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm text-accent mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to Software Developer internships
          </div>

          <p className="text-primary font-mono font-medium tracking-widest uppercase text-sm mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-primary/80" />
            Hi, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-light mb-4 leading-[1.05] font-display">
            Joe Carlo Jr. <br className="hidden sm:block" />
            <span className="text-gradient">O. Barandon</span>
          </h1>

          {/* Typing role */}
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6 h-[1.4em] font-display">
            <span className="text-slate-500">&gt;_ </span>
            {role}
            <span className="caret h-[0.9em] align-middle bg-primary" />
          </h2>

          <p className="text-lg md:text-xl text-slate-400 mb-6 max-w-2xl leading-relaxed">
            A third-year Computer Science student passionate about building user-focused
            applications — from React web platforms and MERN apps to 3D games and multilingual
            AI systems.
          </p>

          <p className="flex items-center gap-2 text-slate-500 text-sm mb-10">
            <MapPin size={16} className="text-primary" /> Naga City, Camarines Sur, Philippines
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/CV_BARANDON.pdf" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
              <FileText size={18} /> Download Resume
            </a>

            <div className="flex items-center gap-3 sm:ml-2">
              <a
                href="https://github.com/jcbarandon"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 grid place-items-center rounded-lg border border-slate-700 text-slate-300 hover:text-primary hover:border-primary transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/joe-barandon"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 grid place-items-center rounded-lg border border-slate-700 text-slate-300 hover:text-primary hover:border-primary transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:barandonjoe13@gmail.com"
                aria-label="Email"
                className="w-11 h-11 grid place-items-center rounded-lg border border-slate-700 text-slate-300 hover:text-primary hover:border-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Stats band */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-3xl">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-800 bg-secondary/40 backdrop-blur-sm px-4 py-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient font-display">
                  {s.value}
                </div>
                <div className="text-xs text-slate-400 mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
