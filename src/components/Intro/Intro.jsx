import { motion } from 'framer-motion';
import './Intro.css';

const areas = [
  { icon: '🧠', label: 'AI / ML' },
  { icon: '⚙️', label: 'Software Engineering' },
  { icon: '🌐', label: 'Full-Stack Development' },
  { icon: '📱', label: 'Mobile Development' },
  { icon: '🔄', label: 'Automation' },
];

export default function Intro() {
  return (
    <section className="intro" aria-label="Expertise areas">
      <div className="intro__container">
        <motion.div
          className="intro__track"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="intro__label">I work across</span>
          <div className="intro__divider" />
          <div className="intro__areas" role="list">
            {areas.map((area, i) => (
              <motion.div
                key={area.label}
                className="intro__area"
                role="listitem"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <span className="intro__area-icon" aria-hidden="true">{area.icon}</span>
                <span className="intro__area-label">{area.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
