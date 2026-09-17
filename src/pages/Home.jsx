import { useEffect } from 'react';
import data from '../data.json';
import kimberImg from '../assets/kimber.jpeg';
import tennisImg from '../assets/tennis.jpeg';

export default function Home() {
  const { jobHeader, location } = data.portfolio;

  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <section id="home" className="mb-4">
      <p className="text-[var(--fg-muted)] text-sm mb-4">
        Ni-Howdy! I&apos;m Aaron Cayanan, a
      </p>
      <h1 className="mb-6">
        {jobHeader}<br />based in {location}.
      </h1>

      <p className="text-[var(--fg-muted)] leading-relaxed mb-10 max-w-[50ch]">
        I also have a{' '}
        <span
          className="cat-trigger"
          onMouseEnter={(e) => {
            const card = e.currentTarget.querySelector('.cat-card');
            card.classList.remove('exiting');
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget.querySelector('.cat-card');
            card.classList.add('exiting');
            card.addEventListener('animationend', () => card.classList.remove('exiting'), { once: true });
          }}
        >
          cat
          <span className="cat-card">
            <span className="cat-card-inner">
              <img src={kimberImg} alt="Kimber" className="cat-card-img" />
              <span className="cat-card-name">kimber!</span>
            </span>
          </span>
        </span>
        {' '}and like to play{' '}
        <span
          className="cat-trigger"
          onMouseEnter={(e) => {
            const card = e.currentTarget.querySelector('.cat-card');
            card.classList.remove('exiting');
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget.querySelector('.cat-card');
            card.classList.add('exiting');
            card.addEventListener('animationend', () => card.classList.remove('exiting'), { once: true });
          }}
        >
          tennis
          <span className="cat-card">
            <span className="cat-card-inner">
              <img src={tennisImg} alt="Tennis" className="cat-card-img" />
              <span className="cat-card-name">wimbledon tourney!</span>
            </span>
          </span>
        </span>
        . You&apos;ll likely see me attached to my laptop with my terminal open.
      </p>

      {/* Social links — underlined text style */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a
          href="https://github.com/aacayanan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--fg-muted)] border-b border-[var(--border)] pb-0.5 hover:text-[var(--fg)] hover:border-[var(--fg)] transition-colors"
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/aacayanan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--fg-muted)] border-b border-[var(--border)] pb-0.5 hover:text-[var(--fg)] hover:border-[var(--fg)] transition-colors"
        >
          linkedin
        </a>
        <a
          href="mailto:aaroncayanan02@gmail.com"
          className="text-[var(--fg-muted)] border-b border-[var(--border)] pb-0.5 hover:text-[var(--fg)] hover:border-[var(--fg)] transition-colors"
        >
          email
        </a>
      </div>
    </section>
  );
}
