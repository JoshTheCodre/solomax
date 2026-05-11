import React, { useEffect, useState } from 'react';

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('book');
    const why = document.getElementById('why');
    const footer = document.getElementById('footer-contact');
    const mobile = window.matchMedia('(max-width: 767px)').matches;

    if (!hero || !why || !footer || !mobile) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(false);
      },
      { threshold: 0.2 }
    );

    const whyObserver = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: '80px 0px 0px 0px' }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(false);
      },
      { threshold: 0.1 }
    );

    heroObserver.observe(hero);
    whyObserver.observe(why);
    footerObserver.observe(footer);

    return () => {
      heroObserver.disconnect();
      whyObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center p-4 pointer-events-none md:hidden">
      <a href="https://checkout.solomaxstudios.com/" className="pointer-events-auto btn-primary px-6 py-4 rounded-full text-sm font-bold shadow-2xl shadow-black/40">
        Get My Digital Copy
      </a>
    </div>
  );
}
