const navLinks = [
  { name: 'experience', path: '#experience' },
  { name: 'skills', path: '#skills' },
  { name: 'work', path: '#projects' },
];

export default function TopNav() {
  return (
    <nav className="fixed top-0 right-0 z-50 hidden lg:flex items-center gap-8 px-8 py-6">
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
  );
}
