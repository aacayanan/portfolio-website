import { useState } from 'react';
import PropTypes from 'prop-types';
import data from '../data.json';

const tabs = [
  { name: 'experience', value: 'experience' },
  { name: 'education', value: 'education' },
];

ExperienceEntry.propTypes = {
  item: PropTypes.shape({
    position: PropTypes.string,
    degree: PropTypes.string,
    duration: PropTypes.string.isRequired,
    company: PropTypes.string,
    institution: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  type: PropTypes.oneOf(['experience', 'education']).isRequired,
};

function ExperienceEntry({ item, type }) {
  return (
    <div className="relative pl-6 pb-10 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-[var(--border)]" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3.5px] rounded-full bg-[var(--fg-muted)]" />

      <div>
        <p className="text-[var(--fg)] leading-relaxed">
          {type === 'experience' ? item.position : item.degree}
          {' at '}
          <span className="font-medium">{type === 'experience' ? item.company : item.institution}</span>
        </p>
        <p className="text-sm text-[var(--fg-muted)] mt-1 mb-3">
          {item.duration}
        </p>
        {item.description && (
          <p className="text-[var(--fg-muted)] text-sm leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div>
      <h2 className="mb-8">Work</h2>

      {/* Tab switcher */}
      <div className="flex gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`text-sm transition-colors ${
              activeTab === tab.value
                ? 'text-[var(--fg)] font-medium'
                : 'text-[var(--fg-muted)] hover:text-[var(--fg)]'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {activeTab === 'experience'
          ? data.experience.map((item, i) => (
              <ExperienceEntry key={i} item={item} type="experience" />
            ))
          : data.education.map((item, i) => (
              <ExperienceEntry key={i} item={item} type="education" />
            ))}
      </div>
    </div>
  );
}
