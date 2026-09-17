import ThemeToggle from './ThemeToggle';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-12 hidden lg:flex flex-col items-center justify-between py-8 bg-[var(--bg)] border-r border-[var(--border)] z-10">
      {/* Top: name — vertical */}
      <a
        href="#home"
        className="text-[var(--fg-muted)] text-[0.65rem] font-medium tracking-widest uppercase"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
      >
        Aaron Cayanan
      </a>

      {/* Bottom: dark mode toggle */}
      <ThemeToggle />
    </aside>
  );
}
