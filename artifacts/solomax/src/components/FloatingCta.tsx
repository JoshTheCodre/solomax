import React, { useEffect, useState } from 'react';

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const leadCapture = document.getElementById('lead-capture');
    const ratings = document.getElementById('ratings');
    const footer = document.getElementById('footer-contact');
    const mobile = window.matchMedia('(max-width: 767px)').matches;

    if (!leadCapture || !ratings || !footer || !mobile) return;

    const leadObserver = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.05 }
    );

    const ratingsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(false);
        else setVisible(true);
      },
      { threshold: 0.15 }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(false);
      },
      { threshold: 0.1 }
    );

    leadObserver.observe(leadCapture);
    ratingsObserver.observe(ratings);
    footerObserver.observe(footer);

    return () => {
      leadObserver.disconnect();
      ratingsObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center p-4 pointer-events-none md:hidden">
      <a href="#lead-capture" className="pointer-events-auto btn-primary px-6 py-4 rounded-full text-sm font-bold shadow-2xl shadow-black/40">
        Get My Digital Copy
      </a>
    </div>
  );
}
