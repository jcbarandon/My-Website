import { User, MapPin, GraduationCap, Languages } from 'lucide-react';
import meImage from '../assets/me.jpg';
import Reveal from './Reveal';

const facts = [
  { icon: <MapPin size={16} />, label: 'Naga City, Philippines' },
  { icon: <GraduationCap size={16} />, label: 'BS Computer Science · 3.79 QPI' },
  { icon: <Languages size={16} />, label: 'English · Filipino (Tagalog)' },
];

const About = () => {
  return (
    <section id="about" className="bg-slate-900">
      <div className="section-container">
        <Reveal>
          <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
            <User className="text-primary" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-light m-0 font-display">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-slate-300 leading-relaxed text-lg space-y-5">
              <p>
                I'm a third-year <span className="text-light font-medium">BS Computer Science</span>{' '}
                student at Ateneo de Naga University who loves turning ideas into applications people
                actually enjoy using.
              </p>
              <p>
                My work spans three worlds: building <span className="text-primary font-medium">full-stack
                web platforms</span> with React and the MERN stack, crafting{' '}
                <span className="text-accent font-medium">UI/UX for award-winning games</span>, and
                training <span className="text-accent2 font-medium">multilingual AI systems</span> to make
                LLMs safer and more reliable in Filipino.
              </p>
              <p>
                Along the way I've earned a National Finalist spot at DOST Level Up 2.0 and led a team to
                1st Place at the AdNU Software Festival — while staying on the honor roll.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {facts.map((f) => (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-2 text-sm text-slate-300 bg-dark/60 border border-slate-700/60 rounded-full px-4 py-2"
                  >
                    <span className="text-primary">{f.icon}</span>
                    {f.label}
                  </span>
                ))}
              </div>

              <div className="pt-3">
                <a
                  href="#contact"
                  className="text-primary hover:text-blue-400 font-medium inline-flex items-center gap-2 group transition-colors"
                >
                  Let's work together
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative group">
              <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl bg-secondary border-2 border-slate-700 overflow-hidden relative shadow-2xl group-hover:border-primary/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 pointer-events-none mix-blend-overlay" />
                <img
                  src={meImage}
                  alt="Joe Carlo Jr. O. Barandon"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dots opacity-40 -z-10 rounded-lg" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
