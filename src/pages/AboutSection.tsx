import React, { useEffect, useRef } from 'react';

const stats = [
  { value: '7,000+', label: 'Creators helped' },
  { value: '4.9 / 5', label: 'Average rating' },
  { value: '3+', label: 'Years in the trenches' },
  { value: '120+', label: 'Policy cases studied' },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('reveal'); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-[#0D0D14] border-t border-white/10">
      <div ref={ref} className="reveal-hidden max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5 border border-primary/30 rounded-full px-4 py-1.5">
              About
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-[1.15]">
              We've been where<br />
              <em className="font-light italic text-white/75">you are right now.</em>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-4">
              SoloMax Studios started as a personal frustration. We watched genuinely good creators — people putting out real work — lose their income overnight over policies they never saw coming. Strikes. Demonetization. Revenue holds. It felt random. It wasn't.
            </p>
            <p className="text-white/55 text-base leading-relaxed mb-4">
              So we went deep. Years of studying YouTube's advertiser guidelines, real appeals that actually worked, and the patterns behind what keeps channels safe long-term. The Blueprint is what we wish had existed back then — no fluff, no fear-mongering, just the stuff that works.
            </p>
            <p className="text-white/55 text-base leading-relaxed">
              We're a small team. We care a lot. And we genuinely want your channel to make it.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-accent/20 border border-primary/30 flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0">
                S
              </div>
              <div>
                <p className="text-white font-semibold text-sm">The SoloMax Team</p>
                <p className="text-white/40 text-xs">SoloMax Studios</p>
              </div>
            </div>
          </div>

          {/* Right — card */}
          <div className="flex flex-col gap-4">
            <div className="glass-light border border-white/10 rounded-3xl p-7 sm:p-8">
              <div className="mb-6">
                <svg className="text-primary/35 mb-4" width="32" height="24" viewBox="0 0 32 24" fill="currentColor" aria-hidden="true">
                  <path d="M0 24V14.4C0 10.56 1.04 7.36 3.12 4.8 5.2 2.24 8.32.64 12.48 0L13.44 1.92C11.2 2.56 9.44 3.76 8.16 5.52 6.88 7.28 6.24 9.12 6.24 11.04h5.76V24H0zm18.56 0V14.4c0-3.84 1.04-7.04 3.12-9.6 2.08-2.56 5.2-4.16 9.36-4.8l.96 1.92c-2.24.64-4 1.84-5.28 3.6-1.28 1.76-1.92 3.6-1.92 5.52h5.76V24H18.56z" />
                </svg>
                <p className="text-white/70 text-base leading-relaxed italic">
                  "The Blueprint is for the creator who's done hoping it'll sort itself out — and is actually ready to do something about it."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-5 pt-6 border-t border-white/8">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <span className="font-display text-2xl font-bold text-white">{s.value}</span>
                    <span className="text-xs text-white/45">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-xs text-white/30 tracking-wide">
              Trusted by creators across 40+ countries · 30-day money-back guarantee
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
