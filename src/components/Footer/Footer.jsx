import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <button className="footer__logo" onClick={scrollToTop} aria-label="Back to top">
              ROHAN <span>MONDAL</span>
            </button>
            <p className="footer__tagline">
              AI/ML Developer & Software Engineer
            </p>
          </div>

          <nav className="footer__links" aria-label="Footer navigation">
            {[
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Skills', href: '#skills' },
              { label: 'Experience', href: '#experience' },
              { label: 'Certifications', href: '#certifications' },
              { label: 'Contact', href: '#contact' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                className="footer__link"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            <a href="https://github.com/Rohanmon80" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/rohan-mondal-a39698314" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:rohan21388@gmail.com" className="footer__social" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__divider" />
          <div className="footer__copy">
            <p>© {year} Rohan Mondal. All rights reserved.</p>
            <p className="footer__made-with">
              Built with <Heart size={12} aria-label="love" /> React & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
