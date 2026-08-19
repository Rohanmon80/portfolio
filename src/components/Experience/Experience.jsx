import { motion } from 'framer-motion';
import { experience } from '../../data/experience.js';
import './Experience.css';

const typeLabels = {
  education: { label: 'Education', color: '--accent-teal', dot: '🎓' },
  project: { label: 'Project', color: '--accent-blue', dot: '⚡' },
  achievement: { label: 'Achievement', color: '#F59E0B', dot: '🏆' },
};

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Journey</p>
          <h2 className="section-heading">My Journey</h2>
          <p className="section-subheading">
            From my first project to where I am today — a continuous learning path in AI, software engineering, and beyond.
          </p>
        </motion.div>

        <div className="timeline" role="list">
          {experience.map((item, i) => {
            const type = typeLabels[item.type] || typeLabels.project;
            return (
              <motion.div
                key={item.id}
                className="timeline__item"
                role="listitem"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Dot */}
                <div className="timeline__dot-wrap">
                  <div
                    className={`timeline__dot ${item.achievement ? 'timeline__dot--achievement' : ''}`}
                    style={{
                      background: item.achievement
                        ? 'rgba(245,158,11,0.15)'
                        : `var(${type.color}-muted, var(--accent-teal-muted))`,
                      borderColor: item.achievement ? '#F59E0B' : `var(${type.color})`,
                    }}
                    aria-hidden="true"
                  >
                    <span>{type.dot}</span>
                  </div>
                  {i < experience.length - 1 && <div className="timeline__line" />}
                </div>

                {/* Card */}
                <div className="timeline__card">
                  <div className="timeline__card-meta">
                    <span className="timeline__period">{item.period}</span>
                    <span
                      className="timeline__type-badge"
                      style={{ color: item.achievement ? '#F59E0B' : `var(${type.color})` }}
                    >
                      {type.label}
                    </span>
                  </div>
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__org">{item.organization}</p>
                  {item.status && (
                    <span className="timeline__status">{item.status}</span>
                  )}
                  <p className="timeline__desc">{item.description}</p>
                  <div className="timeline__tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
