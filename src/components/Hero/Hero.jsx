import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, Eye } from 'lucide-react';
import './Hero.css';

const RESUME_EXISTS = false; // Set to true when resume PDF is added

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const visualVariants = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      {/* Background ambient */}
      <div className="hero__ambient" aria-hidden="true">
        <div className="hero__ambient-teal" />
        <div className="hero__ambient-blue" />
        <div className="hero__grid" />
      </div>

      <div className="hero__container">
        {/* Left — Content */}
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero__badge-wrap">
            <span className="hero__badge">
              <span className="hero__badge-dot" />
              AI/ML DEVELOPER
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero__heading">
            I build{' '}
            <span className="hero__heading-accent">intelligent software</span>
            {' '}and digital products.
          </motion.h1>

          <motion.p variants={itemVariants} className="hero__description">
            I'm Rohan, a B.Tech AIML student and software developer focused on building
            practical AI-powered applications, full-stack systems, mobile applications,
            and automation workflows.
          </motion.p>

          <motion.div variants={itemVariants} className="hero__actions">
            <button
              className="btn btn--primary"
              onClick={scrollToProjects}
              aria-label="View my work"
            >
              <Eye size={16} />
              View My Work
            </button>

            {RESUME_EXISTS ? (
              <a
                href="/resume/Rohan-Mondal-Resume.pdf"
                download
                className="btn btn--secondary"
                aria-label="Download resume"
              >
                <Download size={16} />
                Download Resume
              </a>
            ) : (
              <button
                className="btn btn--secondary btn--disabled"
                disabled
                title="Resume coming soon"
                aria-label="Resume coming soon"
              >
                <Download size={16} />
                Resume Coming Soon
              </button>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="hero__meta">
            <div className="hero__meta-tags">
              <span className="hero__meta-tag">B.Tech AIML</span>
              <span className="hero__meta-divider">·</span>
              <span className="hero__meta-tag">AI/ML</span>
              <span className="hero__meta-divider">·</span>
              <span className="hero__meta-tag">Software Engineering</span>
            </div>
            <div className="hero__availability">
              <span className="hero__availability-dot" />
              Open to opportunities
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="hero__socials">
            <a
              href="https://github.com/Rohanmon80"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-mondal-a39698314"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:rohan21388@gmail.com"
              className="hero__social-link"
              aria-label="Email"
            >
              <span>rohan21388@gmail.com</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Profile Visual */}
        <motion.div
          className="hero__visual"
          variants={visualVariants}
          initial="hidden"
          animate="visible"
          aria-hidden="true"
        >
          <div className="hero__profile-wrap">
            <div className="hero__glow" />
            <div className="hero__profile-ring hero__profile-ring--outer" />
            <div className="hero__profile-ring hero__profile-ring--inner" />
            <div className="hero__profile-container">
              {/* Replace /images/profile.png with the real photo - no code changes needed */}
              <img
                src="/images/profile.png"
                alt="Rohan Mondal"
                className="hero__profile-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hero__profile-placeholder" style={{ display: 'none' }}>
                <ProfilePlaceholder />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="hero__float-badge hero__float-badge--tl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span>🤖</span>
              <span>AI / ML</span>
            </motion.div>

            <motion.div
              className="hero__float-badge hero__float-badge--br"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <span>⚡</span>
              <span>Full-Stack</span>
            </motion.div>

            <motion.div
              className="hero__float-badge hero__float-badge--bl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <span>📱</span>
              <span>Mobile</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}

function ProfilePlaceholder() {
  return (
    <div className="hero__placeholder-inner">
      {/* Abstract tech visual */}
      <svg viewBox="0 0 200 200" width="160" height="160" className="hero__placeholder-svg">
        <defs>
          <linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="pg2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Central hexagon */}
        <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="none" stroke="url(#pg1)" strokeWidth="1.5" opacity="0.6" />
        <polygon points="100,40 150,67 150,133 100,160 50,133 50,67" fill="none" stroke="url(#pg1)" strokeWidth="1" opacity="0.4" />
        <polygon points="100,60 130,77 130,123 100,140 70,123 70,77" fill="url(#pg2)" />
        {/* Center dot */}
        <circle cx="100" cy="100" r="12" fill="url(#pg1)" opacity="0.9" />
        <circle cx="100" cy="100" r="6" fill="white" opacity="0.8" />
        {/* Orbiting dots */}
        <circle cx="100" cy="30" r="4" fill="#2DD4BF" opacity="0.8" />
        <circle cx="155" cy="65" r="3" fill="#60A5FA" opacity="0.8" />
        <circle cx="155" cy="135" r="4" fill="#2DD4BF" opacity="0.6" />
        <circle cx="100" cy="170" r="3" fill="#60A5FA" opacity="0.8" />
        <circle cx="45" cy="135" r="4" fill="#2DD4BF" opacity="0.6" />
        <circle cx="45" cy="65" r="3" fill="#60A5FA" opacity="0.8" />
        {/* Lines */}
        <line x1="100" y1="30" x2="100" y2="88" stroke="url(#pg1)" strokeWidth="0.8" opacity="0.4" />
        <line x1="155" y1="65" x2="115" y2="88" stroke="url(#pg1)" strokeWidth="0.8" opacity="0.4" />
        <line x1="155" y1="135" x2="115" y2="112" stroke="url(#pg1)" strokeWidth="0.8" opacity="0.4" />
      </svg>

      <div className="hero__placeholder-text">
        <span>Add your photo to</span>
        <code>/public/images/profile.png</code>
      </div>
    </div>
  );
}
