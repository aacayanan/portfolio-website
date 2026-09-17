import data from '../data.json';

export default function Projects() {
  const projects = data.projects || [];

  return (
    <div className="mb-24">
      <h2 className="mb-8">Projects</h2>

      {projects.length === 0 ? (
        <p className="text-[var(--fg-muted)] text-sm">Coming soon.</p>
      ) : (
        <div className="flex flex-col gap-10">
          {projects.map((project, i) => (
            <div key={i}>
              <p className="text-[var(--fg)] leading-relaxed mb-1">
                {project.name}
              </p>
              <p className="text-sm text-[var(--fg-muted)] mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-x-1 gap-y-1 text-sm">
                {project.tags.map((tag, j) => (
                  <span key={tag}>
                    <span className="text-[var(--fg-muted)]">{tag}</span>
                    {j < project.tags.length - 1 && (
                      <span className="text-[var(--fg-muted)]"> · </span>
                    )}
                  </span>
                ))}
                {(project.github || project.live) && (
                  <>
                    <span className="text-[var(--fg-muted)]"> · </span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--fg)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--fg)] transition-colors"
                      >
                        source
                      </a>
                    )}
                    {project.github && project.live && (
                      <span className="text-[var(--fg-muted)]"> · </span>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--fg)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--fg)] transition-colors"
                      >
                        live
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
