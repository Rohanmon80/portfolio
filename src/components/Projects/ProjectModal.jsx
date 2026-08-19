import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import './Projects.css';

export default function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
        aria-label={`${project.title} project details`}
      >
        <motion.div
          className="modal"
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal__header" style={{ background: project.gradient }}>
            <div className="modal__header-content">
              <span className="modal__number">{project.number}</span>
              <div>
                <p className="modal__category">{project.category}</p>
                <h2 className="modal__title">{project.title}</h2>
              </div>
            </div>
            <button
              className="modal__close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="modal__body">
            <div className="modal__section">
              <h3 className="modal__section-title">Overview</h3>
              <p className="modal__text">{project.description}</p>
            </div>

            {project.problem && (
              <div className="modal__section">
                <h3 className="modal__section-title">Problem</h3>
                <p className="modal__text">{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div className="modal__section">
                <h3 className="modal__section-title">Solution</h3>
                <p className="modal__text">{project.solution}</p>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className="modal__section">
                <h3 className="modal__section-title">Key Features</h3>
                <ul className="modal__features">
                  {project.features.map(f => (
                    <li key={f} className="modal__feature">
                      <span className="modal__feature-dot" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.achievement && (
              <div className="modal__achievement">
                <span>🏆</span>
                <span>{project.achievement}</span>
              </div>
            )}

            <div className="modal__section">
              <h3 className="modal__section-title">Technologies</h3>
              <div className="modal__tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="chip chip--modal">{tech}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="modal__links">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary modal__link-btn"
                >
                  <Github size={16} />
                  GitHub Repository
                </a>
              ) : (
                <div className="modal__link-soon">
                  <Github size={16} />
                  GitHub — Coming Soon
                </div>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary modal__link-btn"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              ) : null}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
