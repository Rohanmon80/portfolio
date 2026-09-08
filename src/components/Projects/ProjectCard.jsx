import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectCard({ project, onSelect }) {
  return (
    <motion.article
      className={`project-card project-card--${project.size}`}
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} project details`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelect(project);
        }
      }}
    >
      {/* Visual Preview */}
      <div
        className="project-card__visual"
        aria-hidden="true"
        style={{ background: project.gradient }}
      >
        <ProjectVisual project={project} />
      </div>

      {/* Content */}
      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__number">{project.number}</span>
          <span className="project-card__category">{project.category}</span>
        </div>

        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__desc">
          {project.shortDesc}
        </p>

        {project.achievement && (
          <div className="project-card__achievement">
            <span>🏆</span>
            <span>{project.achievement}</span>
          </div>
        )}

        <div className="project-card__tech">
          {project.technologies
            .slice(0, project.size === 'large' ? 6 : 3)
            .map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
        </div>
      </div>

      {/* View Details */}
      <button
        className="project-card__cta"
        onClick={(e) => {
          e.stopPropagation();
          onSelect(project);
        }}
        aria-label={`Details for ${project.title}`}
      >
        View Details
        <ArrowUpRight size={14} />
      </button>
    </motion.article>
  );
}

/* =========================================================
   PROJECT VISUAL
   ========================================================= */

function ProjectVisual({ project }) {
  /*
   * If an image is provided in projects.js,
   * display that image.
   *
   * Example:
   * image: '/images/projects/edumate.png'
   */
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} logo`}
        className="project-visual-image"
        onError={(e) => {
          console.error(`Failed to load project image: ${project.image}`);
          e.currentTarget.style.display = 'none';
        }}
      />
    );
  }

  /*
   * Existing SVG visuals are kept as fallback.
   */
  const visuals = {
    edumate: <EduMateVisual />,
    scriptforge: <ScriptForgeVisual />,
    agreewise: <AgreeWiseVisual />,
    interviewx: <InterviewXVisual />,
    healthrisk: <HealthRiskVisual />,
    jarvis: <JarvisVisual />,
    newsaggregator: <NewsVisual />,
    selfdriving: <SelfDrivingVisual />,
  };

  return (
    visuals[project.id] || (
      <DefaultVisual accentColor={project.accentColor} />
    )
  );
}

/* =========================================================
   EDU MATE
   ========================================================= */

function EduMateVisual() {
  return (
    <svg
      viewBox="0 0 400 220"
      width="100%"
      height="100%"
      className="project-visual-svg"
    >
      <defs>
        <linearGradient id="em1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      <rect
        x="140"
        y="20"
        width="120"
        height="180"
        rx="16"
        fill="rgba(0,0,0,0.4)"
        stroke="rgba(45,212,191,0.4)"
        strokeWidth="1.5"
      />

      <rect
        x="148"
        y="32"
        width="104"
        height="155"
        rx="8"
        fill="rgba(0,0,0,0.3)"
      />

      <rect
        x="156"
        y="40"
        width="88"
        height="12"
        rx="3"
        fill="url(#em1)"
        opacity="0.9"
      />

      <rect
        x="156"
        y="58"
        width="88"
        height="30"
        rx="6"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(45,212,191,0.2)"
        strokeWidth="1"
      />

      <circle
        cx="168"
        cy="73"
        r="8"
        fill="url(#em1)"
        opacity="0.7"
      />

      <rect
        x="182"
        y="68"
        width="50"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.5)"
      />

      <rect
        x="182"
        y="76"
        width="36"
        height="3"
        rx="2"
        fill="rgba(255,255,255,0.25)"
      />

      <rect
        x="156"
        y="94"
        width="88"
        height="30"
        rx="6"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(96,165,250,0.2)"
        strokeWidth="1"
      />

      <circle
        cx="168"
        cy="109"
        r="8"
        fill="rgba(96,165,250,0.7)"
      />

      <rect
        x="182"
        y="104"
        width="50"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.5)"
      />

      <rect
        x="182"
        y="112"
        width="36"
        height="3"
        rx="2"
        fill="rgba(255,255,255,0.25)"
      />

      <rect
        x="156"
        y="130"
        width="40"
        height="20"
        rx="4"
        fill="url(#em1)"
        opacity="0.6"
      />

      <rect
        x="202"
        y="130"
        width="42"
        height="20"
        rx="4"
        fill="rgba(96,165,250,0.4)"
      />

      <circle
        cx="60"
        cy="80"
        r="40"
        fill="none"
        stroke="rgba(45,212,191,0.15)"
        strokeWidth="1"
      />

      <circle
        cx="60"
        cy="80"
        r="25"
        fill="none"
        stroke="rgba(45,212,191,0.1)"
        strokeWidth="1"
      />

      <circle
        cx="60"
        cy="80"
        r="8"
        fill="rgba(45,212,191,0.3)"
      />

      <circle
        cx="330"
        cy="130"
        r="30"
        fill="none"
        stroke="rgba(96,165,250,0.12)"
        strokeWidth="1"
      />

      <circle
        cx="330"
        cy="130"
        r="10"
        fill="rgba(96,165,250,0.2)"
      />
    </svg>
  );
}

/* =========================================================
   SCRIPT FORGE
   ========================================================= */

function ScriptForgeVisual() {
  return (
    <svg
      viewBox="0 0 400 180"
      width="100%"
      height="100%"
      className="project-visual-svg"
    >
      <defs>
        <linearGradient id="sf1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      <rect
        x="40"
        y="20"
        width="320"
        height="140"
        rx="10"
        fill="rgba(0,0,0,0.4)"
        stroke="rgba(129,140,248,0.3)"
        strokeWidth="1"
      />

      <rect
        x="40"
        y="20"
        width="320"
        height="26"
        rx="10"
        fill="rgba(129,140,248,0.15)"
      />

      <circle cx="58" cy="33" r="5" fill="rgba(239,68,68,0.7)" />
      <circle cx="76" cy="33" r="5" fill="rgba(234,179,8,0.7)" />
      <circle cx="94" cy="33" r="5" fill="rgba(74,222,128,0.7)" />

      <rect
        x="56"
        y="56"
        width="60"
        height="4"
        rx="2"
        fill="rgba(129,140,248,0.8)"
      />

      <rect
        x="120"
        y="56"
        width="80"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.4)"
      />

      <rect
        x="56"
        y="70"
        width="40"
        height="4"
        rx="2"
        fill="rgba(96,165,250,0.7)"
      />

      <rect
        x="100"
        y="70"
        width="90"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.3)"
      />

      <rect
        x="68"
        y="84"
        width="110"
        height="4"
        rx="2"
        fill="rgba(45,212,191,0.6)"
      />

      <rect
        x="56"
        y="98"
        width="70"
        height="4"
        rx="2"
        fill="rgba(129,140,248,0.7)"
      />

      <rect
        x="130"
        y="98"
        width="50"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.3)"
      />

      <rect
        x="56"
        y="112"
        width="130"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.2)"
      />

      <rect
        x="270"
        y="50"
        width="74"
        height="80"
        rx="8"
        fill="rgba(129,140,248,0.1)"
        stroke="rgba(129,140,248,0.3)"
        strokeWidth="1"
      />

      <text
        x="307"
        y="80"
        textAnchor="middle"
        fill="rgba(129,140,248,0.9)"
        fontSize="18"
      >
        ✨
      </text>

      <rect
        x="280"
        y="90"
        width="54"
        height="4"
        rx="2"
        fill="rgba(129,140,248,0.5)"
      />

      <rect
        x="284"
        y="99"
        width="46"
        height="3"
        rx="2"
        fill="rgba(129,140,248,0.3)"
      />

      <rect
        x="280"
        y="108"
        width="54"
        height="14"
        rx="4"
        fill="url(#sf1)"
        opacity="0.7"
      />
    </svg>
  );
}

/* =========================================================
   AGREEWISE
   ========================================================= */

function AgreeWiseVisual() {
  return (
    <svg
      viewBox="0 0 400 180"
      width="100%"
      height="100%"
      className="project-visual-svg"
    >
      <rect
        x="30"
        y="20"
        width="200"
        height="140"
        rx="10"
        fill="rgba(0,0,0,0.35)"
        stroke="rgba(45,212,191,0.25)"
        strokeWidth="1"
      />

      <rect
        x="30"
        y="20"
        width="200"
        height="24"
        rx="10"
        fill="rgba(45,212,191,0.1)"
      />

      <rect x="46" y="60" width="140" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="46" y="72" width="120" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="46" y="84" width="130" height="4" rx="2" fill="rgba(255,255,255,0.2)" />

      <rect
        x="46"
        y="100"
        width="160"
        height="20"
        rx="6"
        fill="rgba(239,68,68,0.15)"
        stroke="rgba(239,68,68,0.3)"
        strokeWidth="1"
      />

      <circle cx="56" cy="110" r="4" fill="rgba(239,68,68,0.8)" />

      <rect
        x="64"
        y="107"
        width="90"
        height="3"
        rx="2"
        fill="rgba(239,68,68,0.6)"
      />

      <rect
        x="46"
        y="126"
        width="160"
        height="20"
        rx="6"
        fill="rgba(45,212,191,0.1)"
        stroke="rgba(45,212,191,0.25)"
        strokeWidth="1"
      />

      <circle cx="56" cy="136" r="4" fill="rgba(45,212,191,0.8)" />

      <rect
        x="64"
        y="133"
        width="80"
        height="3"
        rx="2"
        fill="rgba(45,212,191,0.5)"
      />

      <rect
        x="250"
        y="30"
        width="120"
        height="130"
        rx="10"
        fill="rgba(0,0,0,0.3)"
        stroke="rgba(96,165,250,0.25)"
        strokeWidth="1"
      />

      <text
        x="310"
        y="62"
        textAnchor="middle"
        fill="rgba(96,165,250,0.8)"
        fontSize="16"
      >
        🧠
      </text>

      <rect
        x="266"
        y="72"
        width="88"
        height="4"
        rx="2"
        fill="rgba(96,165,250,0.6)"
      />

      <rect
        x="266"
        y="84"
        width="70"
        height="3"
        rx="2"
        fill="rgba(255,255,255,0.2)"
      />

      <rect
        x="266"
        y="94"
        width="78"
        height="3"
        rx="2"
        fill="rgba(255,255,255,0.15)"
      />

      <rect
        x="266"
        y="110"
        width="88"
        height="18"
        rx="4"
        fill="rgba(96,165,250,0.2)"
        stroke="rgba(96,165,250,0.3)"
        strokeWidth="1"
      />

      <rect
        x="274"
        y="117"
        width="60"
        height="3"
        rx="2"
        fill="rgba(96,165,250,0.6)"
      />

      <rect
        x="266"
        y="134"
        width="88"
        height="18"
        rx="4"
        fill="rgba(45,212,191,0.15)"
        stroke="rgba(45,212,191,0.25)"
        strokeWidth="1"
      />

      <rect
        x="274"
        y="141"
        width="50"
        height="3"
        rx="2"
        fill="rgba(45,212,191,0.6)"
      />
    </svg>
  );
}

/* =========================================================
   INTERVIEW X
   ========================================================= */

function InterviewXVisual() {
  return (
    <svg
      viewBox="0 0 400 180"
      width="100%"
      height="100%"
      className="project-visual-svg"
    >
      <rect
        x="40"
        y="20"
        width="320"
        height="140"
        rx="10"
        fill="rgba(0,0,0,0.35)"
        stroke="rgba(96,165,250,0.25)"
        strokeWidth="1"
      />

      <rect
        x="40"
        y="20"
        width="320"
        height="24"
        rx="10"
        fill="rgba(96,165,250,0.1)"
      />

      <rect x="56" y="56" width="130" height="90" rx="8" fill="rgba(0,0,0,0.2)" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />

      <rect x="64" y="64" width="80" height="4" rx="2" fill="rgba(96,165,250,0.7)" />
      <rect x="64" y="76" width="110" height="3" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="64" y="86" width="90" height="3" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="64" y="96" width="110" height="3" rx="2" fill="rgba(255,255,255,0.15)" />

      <rect x="64" y="120" width="70" height="18" rx="4" fill="rgba(96,165,250,0.3)" stroke="rgba(96,165,250,0.4)" strokeWidth="1" />

      <rect x="200" y="56" width="144" height="42" rx="8" fill="rgba(0,0,0,0.2)" stroke="rgba(45,212,191,0.2)" strokeWidth="1" />

      <rect x="212" y="68" width="60" height="4" rx="2" fill="rgba(45,212,191,0.7)" />
      <rect x="212" y="78" width="100" height="3" rx="2" fill="rgba(255,255,255,0.2)" />

      <rect x="200" y="106" width="144" height="40" rx="8" fill="rgba(0,0,0,0.2)" stroke="rgba(96,165,250,0.15)" strokeWidth="1" />

      <circle cx="220" cy="126" r="8" fill="rgba(96,165,250,0.25)" stroke="rgba(96,165,250,0.4)" strokeWidth="1" />

      <rect x="236" y="122" width="80" height="3" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="236" y="130" width="60" height="3" rx="2" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

/* =========================================================
   HEALTH RISK
   ========================================================= */

function HealthRiskVisual() {
  return (
    <svg
      viewBox="0 0 400 180"
      width="100%"
      height="100%"
      className="project-visual-svg"
    >
      <defs>
        <linearGradient id="hr1" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect
        x="60"
        y="40"
        width="280"
        height="120"
        rx="8"
        fill="rgba(0,0,0,0.25)"
      />

      {[0.4, 0.7, 0.55, 0.9, 0.65, 0.45, 0.8].map((h, i) => (
        <rect
          key={i}
          x={72 + i * 36}
          y={140 - h * 80}
          width="22"
          height={h * 80}
          rx="3"
          fill="url(#hr1)"
          opacity={0.7 + i * 0.03}
        />
      ))}

      <text x="320" y="50" fontSize="22">
        🏆
      </text>

      <text
        x="300"
        y="68"
        fill="rgba(251,191,36,0.9)"
        fontSize="7"
        fontWeight="bold"
      >
        1st PRIZE
      </text>
    </svg>
  );
}

/* =========================================================
   JARVIS
   ========================================================= */

function JarvisVisual() {
  return (
    <svg
      viewBox="0 0 400 180"
      width="100%"
      height="100%"
      className="project-visual-svg"
    >
      <circle
        cx="200"
        cy="90"
        r="65"
        fill="none"
        stroke="rgba(96,165,250,0.2)"
        strokeWidth="1.5"
      />

      <circle
        cx="200"
        cy="90"
        r="45"
        fill="none"
        stroke="rgba(96,165,250,0.15)"
        strokeWidth="1"
      />

      <circle
        cx="200"
        cy="90"
        r="28"
        fill="rgba(96,165,250,0.12)"
        stroke="rgba(96,165,250,0.3)"
        strokeWidth="1.5"
      />

      <circle
        cx="200"
        cy="90"
        r="12"
        fill="rgba(96,165,250,0.5)"
      />

      {[1, 2, 3, 4].map((i) => (
        <g key={i}>
          <path
            d={`M ${170 - i * 8} ${80} Q ${170 - i * 8 - 5} 90 ${
              170 - i * 8
            } 110`}
            fill="none"
            stroke="rgba(96,165,250,0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          <path
            d={`M ${230 + i * 8} ${80} Q ${230 + i * 8 + 5} 90 ${
              230 + i * 8
            } 110`}
            fill="none"
            stroke="rgba(96,165,250,0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      ))}

      <text
        x="200"
        y="95"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="bold"
      >
        JARVIS
      </text>

      <text
        x="200"
        y="155"
        textAnchor="middle"
        fill="rgba(96,165,250,0.6)"
        fontSize="8"
      >
        Voice AI Assistant
      </text>
    </svg>
  );
}

/* =========================================================
   NEWS AGGREGATOR
   ========================================================= */

function NewsVisual() {
  return (
    <svg
      viewBox="0 0 400 180"
      width="100%"
      height="100%"
      className="project-visual-svg"
    >
      <rect
        x="40"
        y="20"
        width="320"
        height="140"
        rx="10"
        fill="rgba(0,0,0,0.3)"
      />

      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect
            x="56"
            y={30 + i * 32}
            width="40"
            height="24"
            rx="4"
            fill="rgba(45,212,191,0.15)"
            stroke="rgba(45,212,191,0.2)"
            strokeWidth="1"
          />

          <rect
            x="104"
            y={34 + i * 32}
            width="200"
            height="4"
            rx="2"
            fill="rgba(255,255,255,0.35)"
          />

          <rect
            x="104"
            y={44 + i * 32}
            width="150"
            height="3"
            rx="2"
            fill="rgba(255,255,255,0.18)"
          />
        </g>
      ))}

      <text
        x="70"
        y="155"
        textAnchor="middle"
        fill="rgba(45,212,191,0.5)"
        fontSize="8"
      >
        RSS
      </text>

      <rect
        x="300"
        y="130"
        width="40"
        height="14"
        rx="4"
        fill="rgba(45,212,191,0.2)"
        stroke="rgba(45,212,191,0.3)"
        strokeWidth="1"
      />
    </svg>
  );
}

/* =========================================================
   SELF DRIVING
   ========================================================= */

function SelfDrivingVisual() {
  return (
    <svg
      viewBox="0 0 400 180"
      width="100%"
      height="100%"
      className="project-visual-svg"
    >
      <rect
        x="40"
        y="70"
        width="320"
        height="60"
        rx="4"
        fill="rgba(0,0,0,0.4)"
      />

      <rect
        x="40"
        y="98"
        width="320"
        height="2"
        fill="rgba(255,255,255,0.06)"
      />

      {[0, 60, 120, 180, 240].map((x) => (
        <rect
          key={x}
          x={60 + x}
          y="97"
          width="30"
          height="4"
          rx="2"
          fill="rgba(251,191,36,0.4)"
        />
      ))}

      <rect
        x="155"
        y="78"
        width="90"
        height="44"
        rx="10"
        fill="rgba(96,165,250,0.25)"
        stroke="rgba(96,165,250,0.5)"
        strokeWidth="1.5"
      />

      <rect
        x="168"
        y="86"
        width="64"
        height="24"
        rx="6"
        fill="rgba(96,165,250,0.4)"
      />

      <circle
        cx="174"
        cy="126"
        r="8"
        fill="rgba(255,255,255,0.15)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
      />

      <circle
        cx="226"
        cy="126"
        r="8"
        fill="rgba(255,255,255,0.15)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
      />

      {[-30, -15, 0, 15, 30].map((angle, i) => (
        <line
          key={i}
          x1="200"
          y1="78"
          x2={200 + Math.sin((angle * Math.PI) / 180) * 50}
          y2={78 - Math.cos((angle * Math.PI) / 180) * 50}
          stroke="rgba(45,212,191,0.4)"
          strokeWidth="0.8"
          strokeDasharray="4,3"
        />
      ))}

      <circle
        cx="200"
        cy="78"
        r="4"
        fill="rgba(45,212,191,0.8)"
      />

      <text
        x="200"
        y="165"
        textAnchor="middle"
        fill="rgba(45,212,191,0.5)"
        fontSize="8"
      >
        Neural Network Navigation
      </text>
    </svg>
  );
}

/* =========================================================
   DEFAULT VISUAL
   ========================================================= */

function DefaultVisual({ accentColor }) {
  return (
    <svg
      viewBox="0 0 400 180"
      width="100%"
      height="100%"
      className="project-visual-svg"
    >
      <circle
        cx="200"
        cy="90"
        r="60"
        fill="none"
        stroke={accentColor}
        strokeWidth="1"
        opacity="0.3"
      />

      <circle
        cx="200"
        cy="90"
        r="30"
        fill={accentColor}
        opacity="0.1"
      />

      <circle
        cx="200"
        cy="90"
        r="10"
        fill={accentColor}
        opacity="0.5"
      />
    </svg>
  );
}