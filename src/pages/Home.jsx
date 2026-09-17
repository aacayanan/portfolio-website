import data from '../data.json';

export default function Home() {
  const { jobHeader, description } = data.portfolio;

  return (
    <section id="home" className="mb-24">
      <h1 className="mb-6">Introduction</h1>

      <p className="text-lg text-[var(--fg)] mb-6 leading-relaxed">
        Hey, I&apos;m Aaron! I&apos;m a {jobHeader.toLowerCase()}.
      </p>

      <p className="text-[var(--fg-muted)] leading-relaxed mb-10">
        {description}
      </p>

      {/* Social links — inline text style */}
      <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm">
        <a
          href="https://github.com/aacayanan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--fg)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--fg)] transition-colors"
        >
          github
        </a>
        <span className="text-[var(--fg-muted)]">·</span>
        <a
          href="https://linkedin.com/in/aacayanan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--fg)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--fg)] transition-colors"
        >
          linkedin
        </a>
        <span className="text-[var(--fg-muted)]">·</span>
        <a
          href="mailto:aaron@cayanan.dev"
          className="text-[var(--fg)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--fg)] transition-colors"
        >
          email
        </a>
      </div>
    </section>
  );
}
