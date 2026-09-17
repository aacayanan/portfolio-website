import data from '../data.json';

// Frontend
import feTs from '../assets/fe-ts.svg';
import feJs from '../assets/fe-js.png';
import feReact from '../assets/fe-react.webp';
import feTailwind from '../assets/fe-tailwind.svg';
import feNextjs from '../assets/fe-nextjs.svg';
import feFigma from '../assets/fe-figma.webp';
import feHtml from '../assets/fe-html.png';
import feCss from '../assets/fe-css.png';

// Backend
import bePython from '../assets/be-python.png';
import beFlask from '../assets/be-flask.webp';
import beFastapi from '../assets/be-fastapi.svg';
import beNodejs from '../assets/be-nodejs.svg';
import beJava from '../assets/be-java.webp';
import beCpp from '../assets/be-cpp.png';

// Database
import dbPostgres from '../assets/db-postgres.png';
import dbSqlite from '../assets/db-sqlite.svg';

// Tools
import tlGit from '../assets/tl-git.png';
import tlSupabase from '../assets/tl-supabase.png';
import tlDocker from '../assets/tl-docker.svg';
import tlGithub from '../assets/tl-github.png';
import tlJest from '../assets/tl-jest.png';

const icons = {
  TypeScript: feTs,
  JavaScript: feJs,
  React: feReact,
  Tailwind: feTailwind,
  'Next.js': feNextjs,
  Figma: feFigma,
  HTML: feHtml,
  CSS: feCss,
  Python: bePython,
  Flask: beFlask,
  FastAPI: beFastapi,
  'Node.js': beNodejs,
  Java: beJava,
  'C/C++': beCpp,
  PostgreSQL: dbPostgres,
  SQLite: dbSqlite,
  'Git/GitHub': tlGit,
  Supabase: tlSupabase,
  Docker: tlDocker,
  'GitHub Actions': tlGithub,
  Jest: tlJest,
};

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
                    src={icons[tech.language]}
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
