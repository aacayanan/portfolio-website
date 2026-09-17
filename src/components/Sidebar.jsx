import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'home', path: '#home' },
  { name: 'experience', path: '#experience' },
  { name: 'skills', path: '#skills' },
  { name: 'projects', path: '#projects' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-48 hidden lg:flex flex-col justify-between py-10 px-8 border-r border-[var(--border)]">
      {/* Top: name */}
      <div>
        <a href="#home" className="text-[var(--fg)] font-semibold text-base tracking-tight">
          Aaron Cayanan
        </a>
      </div>

      {/* Middle: nav links */}
      <nav className="flex flex-col gap-3">
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className="text-[var(--fg-muted)] text-sm hover:text-[var(--fg)] transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Bottom: dark mode toggle */}
      <div>
        <ThemeToggle />
      </div>
    </aside>
  );
}
