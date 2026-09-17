import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'home', path: '#home' },
  { name: 'experience', path: '#experience' },
  { name: 'skills', path: '#skills' },
  { name: 'projects', path: '#projects' },
];

export default function MobileNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`lg:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-14 px-6">
        <a href="#home" className="text-[var(--fg)] font-semibold text-sm">
          Aaron Cayanan
        </a>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1 text-[var(--fg)]"
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[var(--bg)] border-b border-[var(--border)] px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-[var(--fg-muted)] text-sm hover:text-[var(--fg)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://aaroncayanan.com/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-sm text-[var(--accent)]"
          >
            resume
          </a>
        </div>
      )}
    </nav>
  );
}
