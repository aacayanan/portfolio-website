import useVisitorCount from '../hooks/useVisitorCount';

export default function Footer() {
  const count = useVisitorCount();

  return (
    <footer className="pt-12 pb-8 border-t border-[var(--border)]">
      <p className="text-xs text-[var(--fg-muted)]">
        Last updated Sep 16th, 2026
        {count !== null && <> · {count.toLocaleString()} views</>}
      </p>
    </footer>
  );
}
