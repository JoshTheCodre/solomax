import React, { useEffect, useState } from 'react';

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('book');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center p-4 pointer-events-none">
      <a
        href="#lead-capture"
        className="pointer-events-auto btn-primary px-6 py-4 rounded-full text-sm font-bold shadow-2xl shadow-black/40"
      >
        Get My Digital Copy
      </a>
    </div>
  );
}
