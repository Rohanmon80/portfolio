import { useTheme } from './hooks/useTheme.js';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Intro from './components/Intro/Intro.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Experience from './components/Experience/Experience.jsx';
import Certifications from './components/Certifications/Certifications.jsx';
import GitHub from './components/GitHub/GitHub.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
