import React, { useEffect, useRef } from 'react';
import AppImage from '../components/ui/AppImage';
import Icon from '../components/ui/AppIcon';

export default function BundleOfferSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('reveal');
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bundle-section py-16 px-4" id="about">
      <div ref={ref} className="reveal-hidden max-w-3xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
          Special Bundle Deal
        </p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--light-foreground)] leading-tight mb-4">
          Want both E-books?
          <br />
          <span className="text-primary">Save 30%</span> when you get the bundle
        </h2>
        <p className="text-base text-gray-600 max-w-xl mx-auto mb-8">
          Get <strong>Bulletproof Your YouTube Channel 2026</strong> + <strong>YouTube Revenue Mastery</strong> together and unlock every strategy for a protected, profitable channel.
        </p>

        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-10">
          <div className="relative">
            <AppImage
              src="/assets/images/book-cover-2-1777748964023.png"
              alt="Bulletproof Your YouTube Channel 2026 book cover"
              width={110}
              height={155}
              className="object-contain drop-shadow-xl rounded-sm"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-primary">+</span>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Bundle</span>
          </div>
          <div className="relative">
            <AppImage
              src="/assets/images/book-cover-1777748961641.png"
              alt="YouTube Revenue Mastery book cover"
              width={110}
              height={155}
              className="object-contain drop-shadow-xl rounded-sm"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-5 py-2 mb-6">
          <Icon name="TagIcon" size={16} className="text-primary" />
          <span className="text-sm font-bold text-primary">Save 30% — Limited Offer</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#lead-capture"
            className="btn-primary px-8 py-4 rounded-full text-sm font-bold w-full sm:w-auto text-center"
          >
            Click here — Get both E-books (save 30%)
          </a>
          <a
            href="#lead-capture"
            className="btn-outline-white border border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-4 rounded-full text-sm font-semibold w-full sm:w-auto text-center transition-all"
          >
            Just the one book — $10.99
          </a>
        </div>
      </div>
    </section>
  );
}
