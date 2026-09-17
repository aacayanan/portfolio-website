import PropTypes from 'prop-types';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import MobileNav from './components/MobileNav';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function Section({ id, children }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopNav />
      <MobileNav />

      {/* Main content — offset by sidebar on desktop */}
      <main className="lg:ml-12">
        <div className="max-w-2xl mx-auto px-6 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <Home />

          <hr className="border-[var(--border)] my-20 lg:my-28" />

          <Section id="experience">
            <Experience />
          </Section>

          <hr className="border-[var(--border)] my-20 lg:my-28" />

          <Section id="skills">
            <Skills />
          </Section>

          <hr className="border-[var(--border)] my-20 lg:my-28" />

          <Section id="projects">
            <Projects />
          </Section>

          <Footer />
        </div>
      </main>
    </div>
  );
}
