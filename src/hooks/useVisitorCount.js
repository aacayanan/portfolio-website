import { useEffect, useState } from 'react';

export default function useVisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/aaroncayanan-portfolio/views')
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => {});
  }, []);

  return count;
}
