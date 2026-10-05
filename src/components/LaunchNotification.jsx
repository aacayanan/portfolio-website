import { useEffect, useState } from 'react';
import data from '../data.json';

// Launch day pinned by the brief: Oct 2, 2026 (local time).
const LAUNCH_DATE = new Date(2026, 9, 2);
const ORIYOMI_URL =
  data.projects.find((project) => project.name === 'oriyomi')?.live ??
  'https://oriyomi.com';

function getDaysSinceLaunch() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.max(0, Math.round((today - LAUNCH_DATE) / 86_400_000));
}

export default function LaunchNotification() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let timer;
    const reveal = () => {
      if (window.scrollY > 48) {
        window.removeEventListener('scroll', reveal);
        // Delay so it lands after the Work section's own reveal, not with it
        timer = setTimeout(() => setVisible(true), 1200);
      }
    };

    window.addEventListener('scroll', reveal, { passive: true });
    reveal(); // covers refresh / anchor navigation that lands mid-page
    return () => {
      window.removeEventListener('scroll', reveal);
      clearTimeout(timer);
    };
  }, []);

  if (dismissed) return null;

  const days = getDaysSinceLaunch();
  const dayText =
    days === 0 ? 'today' : days === 1 ? '1 day ago' : `${days} days ago`;

  return (
    <div
      className={[
        'fixed top-3 left-0 right-0 z-[60]',
        'lg:top-6 lg:left-20 lg:right-auto lg:w-80',
        visible ? 'notif-visible' : 'hidden',
      ].join(' ')}
    >
      <div className="launch-bubble">
        <a
          href={ORIYOMI_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="launch-bubble-link"
        >
          <span className="flex items-start gap-2.5">
            <span className="notif-dot mt-[7px] shrink-0" aria-hidden="true" />
            <span className="text-sm font-medium leading-snug text-[var(--fg)]">
              BTW, I launched an app {dayText}.
            </span>
          </span>
          <span className="notif-cta mt-3 inline-flex items-center gap-1.5 text-sm font-medium">
            Check it out
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.5 6h7M6.5 3l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss notification"
          className="launch-bubble-dismiss"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 3l6 6M9 3l-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
