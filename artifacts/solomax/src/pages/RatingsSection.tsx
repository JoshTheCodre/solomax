import React, { useEffect, useRef, useState } from 'react';
import Icon from '../components/ui/AppIcon';

const ratingStats = [
  { stars: 5, percent: 78 },
  { stars: 4, percent: 14 },
  { stars: 3, percent: 5 },
  { stars: 2, percent: 2 },
  { stars: 1, percent: 1 },
];

const trustBadges = [
  { icon: 'ShieldCheckIcon', label: 'Secure Purchase' },
  { icon: 'ArrowPathIcon', label: '30-Day Guarantee' },
  { icon: 'BoltIcon', label: 'Instant Download' },
  { icon: 'UserGroupIcon', label: '7,000+ Buyers' },
];

function StarDisplay({ rating, large = false }: { rating: number; large?: boolean }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${large ? 'w-7 h-7' : 'w-4 h-4'} star-animate ${
            i < Math.floor(rating) ? 'star-filled' : i < rating ? 'text-yellow-400' : 'star-empty'
          }`}
          style={{ animationDelay: `${i * 0.1}s` }}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function RatingsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal');
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 bg-[#0D0D14] border-t border-white/6" id="ratings">
      <div ref={ref} className="reveal-hidden max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
            Verified Ratings
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
            Rated by Real Creators
          </h2>
          <p className="text-sm text-white/45">Based on 7,000+ verified purchases</p>
        </div>

        <div className="glass-light border border-white/10 rounded-3xl p-8 sm:p-10 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <span className="font-display text-7xl font-bold text-white">4.9</span>
              <StarDisplay rating={4.9} large />
              <span className="text-sm text-white/50">out of 5</span>
            </div>

            <div className="flex-1 w-full space-y-3">
              {ratingStats.map((stat) => (
                <div key={stat.stars} className="flex items-center gap-3">
                  <span className="text-xs text-white/50 w-4 text-right flex-shrink-0">{stat.stars}</span>
                  <svg className="w-3 h-3 star-filled flex-shrink-0" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="flex-1 h-2 bg-white/8 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: animated ? `${stat.percent}%` : '0%' }}
                    />
                  </div>
                  <span className="text-xs text-white/40 w-8 flex-shrink-0">{stat.percent}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="glass-light border border-white/8 rounded-2xl p-4 flex flex-col items-center gap-2 text-center"
            >
              <Icon name={badge.icon as any} size={22} className="text-primary" />
              <span className="text-xs font-semibold text-white/70">{badge.label}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#lead-capture"
            className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-bold"
          >
            <Icon name="BookOpenIcon" size={18} variant="solid" />
            Get Your Copy — $10.99
          </a>
          <p className="text-xs text-white/30 mt-3">
            30-day money-back guarantee · Instant PDF delivery
          </p>
        </div>
      </div>
    </section>
  );
}
