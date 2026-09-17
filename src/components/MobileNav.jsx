import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'home', path: '#home' },
  { name: 'experience', path: '#experience' },
  { name: 'skills', path: '#skills' },
  { name: 'work', path: '#projects' },
];

export default function MobileNav() {
  return (
    <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-[var(--border)] h-12 flex items-center justify-between px-6">
      <a href="#home" className="text-[var(--fg)] text-sm font-medium">
        AC
      </a>

      <div className="flex items-center gap-5">
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className="text-[var(--fg-muted)] text-xs hover:text-[var(--fg)] transition-colors"
          >
            {link.name}
          </a>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}
