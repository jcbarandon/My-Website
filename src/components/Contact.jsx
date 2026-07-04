import { Mail, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Reveal from './Reveal';


const Contact = () => {
  return (
    <section id="contact" className="bg-secondary relative">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="section-subtitle">
            I'm currently open to Software Developer internships and collaborations. Let's build something.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-light mb-6">Let's Connect</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <a href="mailto:barandonjoe13@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <span className="text-lg">barandonjoe13@gmail.com</span>
              </a>
              
              <a href="tel:09949124453" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={20} className="text-primary" />
                </div>
                <span className="text-lg">09949124453</span>
              </a>
              
              <a href="https://linkedin.com/in/joebarandon" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FaLinkedin size={20} className="text-primary" />
                </div>
                <span className="text-lg">Joe Barandon</span>
              </a>
              
              <a href="https://github.com/jcbarandon" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FaGithub size={20} className="text-primary" />
                </div>
                <span className="text-lg">jcbarandon</span>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card bg-dark">
            <h3 className="text-xl font-bold text-light mb-6 font-display">Send me a message</h3>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = data.get('name');
                const email = data.get('email');
                const message = data.get('message');
                const subject = encodeURIComponent(`Portfolio message from ${name || 'someone'}`);
                const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
                window.location.href = `mailto:barandonjoe13@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-secondary border border-slate-700 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-secondary border border-slate-700 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full bg-secondary border border-slate-700 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary flex justify-center items-center gap-2 mt-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
