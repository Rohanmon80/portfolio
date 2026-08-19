import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import './GitHub.css';

export default function GitHub() {
  return (
    <section className="section github-section">
      <div className="container">
        <motion.div
          className="github-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background pattern */}
          <div className="github-card__bg" aria-hidden="true">
            <div className="github-card__glow" />
            <GithubPattern />
          </div>

          <div className="github-card__content">
            <div className="github-card__icon">
              <Github size={32} />
            </div>
            <h2 className="github-card__heading">
              See my work on GitHub
            </h2>
            <p className="github-card__desc">
              All my projects, experiments, and code are available on GitHub. 
              Explore repositories spanning AI/ML, full-stack web, mobile development, and automation.
            </p>
            <a
              href="https://github.com/Rohanmon80"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary github-card__btn"
              aria-label="Explore Rohan Mondal's GitHub profile"
            >
              <Github size={18} />
              Explore My GitHub
              <ArrowUpRight size={16} />
            </a>

            <p className="github-card__handle">@Rohanmon80</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GithubPattern() {
  // Subtle contribution-like grid pattern
  const cols = 26;
  const rows = 7;
  return (
    <svg
      viewBox={`0 0 ${cols * 14} ${rows * 14}`}
      width="100%"
      height="100%"
      className="github-card__pattern"
      aria-hidden="true"
    >
      {Array.from({ length: cols * rows }).map((_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const opacity = Math.random() > 0.65 ? (Math.random() * 0.4 + 0.05) : 0.03;
        return (
          <rect
            key={i}
            x={col * 14}
            y={row * 14}
            width="11"
            height="11"
            rx="2"
            fill="rgba(45, 212, 191, 1)"
            opacity={opacity}
          />
        );
      })}
    </svg>
  );
}
