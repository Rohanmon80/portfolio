import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

// Contact form is UI-ready. To enable sending, integrate with:
// EmailJS: https://www.emailjs.com/
// or Formspree: https://formspree.io/
// Set FORM_ENDPOINT below when ready.
const FORM_ENDPOINT = null; // e.g. 'https://formspree.io/f/YOUR_ID'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORM_ENDPOINT) {
      // Show demo success
      setLoading(true);
      setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
      return;
    }
    // Real submission
    setLoading(true);
    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Get in touch</p>
          <h2 className="section-heading contact__heading">
            Let's build something
            <span className="gradient-text"> meaningful.</span>
          </h2>
          <p className="section-subheading">
            Have an opportunity, project idea, or something interesting to discuss?
            Let's connect.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Left: Direct links */}
          <motion.div
            className="contact__links-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact__links">
              <a
                href="mailto:rohan21388@gmail.com"
                className="contact__link-card"
                aria-label="Send email to Rohan"
              >
                <div className="contact__link-icon contact__link-icon--teal">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="contact__link-label">Email</p>
                  <p className="contact__link-value">rohan21388@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/Rohanmon80"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link-card"
                aria-label="Visit GitHub profile"
              >
                <div className="contact__link-icon contact__link-icon--gray">
                  <Github size={22} />
                </div>
                <div>
                  <p className="contact__link-label">GitHub</p>
                  <p className="contact__link-value">@Rohanmon80</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/rohan-mondal-a39698314"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link-card"
                aria-label="Connect on LinkedIn"
              >
                <div className="contact__link-icon contact__link-icon--blue">
                  <Linkedin size={22} />
                </div>
                <div>
                  <p className="contact__link-label">LinkedIn</p>
                  <p className="contact__link-value">Rohan Mondal</p>
                </div>
              </a>
            </div>

            <div className="contact__cta-row">
              <a
                href="mailto:rohan21388@gmail.com"
                className="btn btn--primary"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/rohan-mondal-a39698314"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Rohanmon80"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            className="contact__form-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div className="contact__success">
                <CheckCircle size={40} className="contact__success-icon" />
                <h3>Message received!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  className="btn btn--secondary"
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                className="contact__form"
                onSubmit={handleSubmit}
                aria-label="Contact form"
              >
                <h3 className="contact__form-title">Send a message</h3>
                {!FORM_ENDPOINT && (
                  <div className="contact__form-notice">
                    <span>ℹ️</span>
                    <span>Form is UI-ready. Integrate EmailJS or Formspree to enable sending.</span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    className="form-input form-textarea"
                    placeholder="What would you like to discuss?"
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary contact__submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="contact__spinner" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
