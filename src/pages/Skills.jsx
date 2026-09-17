import data from '../data.json';

const categories = [
  { label: 'Frontend', items: data.technologies.frontend },
  { label: 'Backend', items: data.technologies.backend },
  { label: 'Database', items: data.technologies.database },
  { label: 'Tools', items: data.technologies.tools },
];

export default function Skills() {
  return (
    <div>
      <h2 className="mb-8">Skills</h2>

      <div className="flex flex-col gap-8">
        {categories.map((cat) => (
          <div key={cat.label}>
            <p className="text-sm text-[var(--fg-muted)] mb-3">{cat.label}</p>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((tech) => (
                <div
                  key={tech.language}
                  className="flex items-center gap-2 text-sm"
                >
                  <img
                    src={tech.icon}
                    alt=""
                    className="w-4 h-4"
                  />
                  <span className="text-[var(--fg)]">{tech.language}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
