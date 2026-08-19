import { motion } from 'framer-motion';
import { Brain, Code2, Globe, Workflow } from 'lucide-react';
import './About.css';

const bentoCards = [
  {
    icon: Brain,
    title: 'AI / ML',
    description: 'Building practical AI-powered applications using machine learning models, generative AI, and intelligent automation.',
    accent: '--accent-teal',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    description: 'Developing structured, maintainable software with clean architecture, readable code, and solid engineering principles.',
    accent: '--accent-blue',
  },
  {
    icon: Globe,
    title: 'Full-Stack Development',
    description: 'Building complete frontend and backend systems from React UIs to Node.js APIs and database integrations.',
    accent: '--accent-teal',
  },
  {
    icon: Workflow,
    title: 'Automation',
    description: 'Using tools like n8n to automate workflows, connect services, integrate APIs, and build intelligent pipelines.',
    accent: '--accent-blue',
  },
];

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">About me</p>
          <h2 className="section-heading about__heading">
            A developer who likes to build.
          </h2>
          <div className="about__text">
            <p>
              I'm <strong>Rohan Mondal</strong>, a B.Tech Artificial Intelligence & Machine Learning 
              student who enjoys turning ideas into practical software. My work spans AI/ML, 
              full-stack development, mobile applications, databases, APIs, and workflow automation.
            </p>
            <p>
              I enjoy building projects that solve real problems, learning new technologies, 
              and combining software engineering with AI to create useful digital products.
            </p>
          </div>
        </motion.div>

        <div className="about__bento" role="list">
          {bentoCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="about__card"
                role="listitem"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="about__card-icon" style={{ color: `var(${card.accent})`, background: `color-mix(in srgb, var(${card.accent}) 12%, transparent)` }}>
                  <Icon size={20} />
                </div>
                <h3 className="about__card-title">{card.title}</h3>
                <p className="about__card-desc">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
