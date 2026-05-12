import React, { useEffect, useState } from 'react';

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById('book');
      const ratings = document.getElementById('ratings');
      if (!hero || !ratings) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const ratingsRect = ratings.getBoundingClientRect();
      const ratingsMiddle = ratingsRect.top + ratingsRect.height / 2;

      const pastHero = heroBottom < 0;
      const ratingsReached = ratingsMiddle <= window.innerHeight / 2;

      setVisible(pastHero && !ratingsReached);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 flex justify-center p-4 pointer-events-none md:hidden transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
    >
      <a
        href="https://checkout.solomaxstudios.com/"
        className={`btn-primary px-6 py-4 rounded-full text-sm font-bold shadow-2xl shadow-black/40 transition-all duration-300 ${
          visible ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        Get My Digital Copy
      </a>
    </div>
  );
}
