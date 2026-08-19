import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { certifications } from '../../data/certifications.js';
import './Certifications.css';

export default function Certifications() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollability, { passive: true });
      checkScrollability();
    }
    return () => el?.removeEventListener('scroll', checkScrollability);
  }, []);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  // Mouse drag
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft - (x - startX);
  };

  const stopDrag = () => setIsDragging(false);

  // Keyboard nav
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') scroll(-1);
    if (e.key === 'ArrowRight') scroll(1);
  };

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <motion.div
          className="certifications__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Achievements</p>
          <h2 className="section-heading">Certifications & Awards</h2>
          <p className="section-subheading">
            Workshops, events, memberships, and achievements I've earned.
          </p>
        </motion.div>

        <div className="certifications__carousel-wrap">
          {/* Arrow buttons */}
          <button
            className={`cert-arrow cert-arrow--left ${!canScrollLeft ? 'cert-arrow--hidden' : ''}`}
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            tabIndex={0}
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={trackRef}
            className={`cert-track ${isDragging ? 'cert-track--dragging' : ''}`}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onKeyDown={onKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Certifications carousel"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                className="cert-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="cert-card__icon-wrap"
                  style={{ background: `${cert.color}18`, borderColor: `${cert.color}40` }}
                >
                  <span className="cert-card__icon" style={{ fontSize: '2rem' }}>{cert.icon}</span>
                </div>

                <div className="cert-card__body">
                  <span
                    className="cert-card__category"
                    style={{ color: cert.color }}
                  >
                    {cert.category}
                  </span>
                  <h3 className="cert-card__title">{cert.title}</h3>
                  <p className="cert-card__issuer">{cert.issuer}</p>
                </div>

                <div className="cert-card__footer">
                  <span className="cert-card__year">{cert.year}</span>
                  <div
                    className="cert-card__badge"
                    style={{ background: `${cert.color}15`, borderColor: `${cert.color}30`, color: cert.color }}
                  >
                    Certified
                  </div>
                </div>

                {/* Decorative top accent */}
                <div
                  className="cert-card__accent"
                  style={{ background: `linear-gradient(90deg, ${cert.color}60, transparent)` }}
                />
              </motion.div>
            ))}
          </div>

          <button
            className={`cert-arrow cert-arrow--right ${!canScrollRight ? 'cert-arrow--hidden' : ''}`}
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            tabIndex={0}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <p className="certifications__hint">
          Drag to scroll · Use arrow keys or buttons to navigate
        </p>
      </div>
    </section>
  );
}
