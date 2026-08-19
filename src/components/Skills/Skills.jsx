import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills.js';
import './Skills.css';

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-heading">Tools I Build With</h2>
        </motion.div>

        {/* n8n feature card */}
        <motion.div
          className="skills__n8n-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -3 }}
        >
          <div className="skills__n8n-icon">⚙️</div>
          <div className="skills__n8n-content">
            <div className="skills__n8n-title">
              <span>Automation & AI Workflows</span>
              <span className="skills__n8n-chip">n8n</span>
            </div>
            <p className="skills__n8n-desc">
              I use <strong>n8n</strong> to connect services, automate workflows, integrate APIs, and explore AI-powered automation pipelines.
            </p>
          </div>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              className="skills__category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: catIdx * 0.08, duration: 0.5 }}
            >
              <h3 className="skills__cat-label">{cat.label}</h3>
              <div className="skills__chips">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    className={`skill-chip ${skill.featured ? 'skill-chip--featured' : ''}`}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -2, scale: 1.03 }}
                    title={skill.name}
                  >
                    <span className="skill-chip__icon" aria-hidden="true">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
