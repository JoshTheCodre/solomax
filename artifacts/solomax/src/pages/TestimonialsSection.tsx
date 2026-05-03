import React, { useState, useEffect, useRef } from 'react';
import AppImage from '../components/ui/AppImage';
import copy from '../content/copy.json';

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 star-animate ${i < count ? 'star-filled' : 'star-empty'}`} style={{ animationDelay: `${i * 0.08}s` }} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { testimonials } = copy;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) el.classList.add('reveal'); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % testimonials.items.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials.items[active];

  return (
    <section id="testimonials" className="py-20 px-4 bg-[#0A0A0F]">
      <div ref={ref} className="reveal-hidden max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2">{testimonials.badge}</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">{testimonials.headline}</h2>
        </div>

        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 sm:p-10 mb-6 cursor-pointer overflow-hidden transition-all duration-500 hover:border-primary/40 hover:bg-primary/5" onClick={() => setActive((active + 1) % testimonials.items.length)}>
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
          <div className="relative flex items-start justify-between mb-6">
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" className="flex-shrink-0 mt-1">
              <path d="M9.333 20C7.493 20 6 18.507 6 16.667V12c0-3.682 2.985-6.667 6.667-6.667v2.667C10.791 8 9.333 9.458 9.333 11.333V12H12c1.84 0 3.333 1.493 3.333 3.333v1.334C15.333 18.507 13.84 20 12 20H9.333zm13.334 0c-1.84 0-3.334-1.493-3.334-3.333v-1.334C19.333 13.493 20.827 12 22.667 12H24V11.333C24 9.458 22.542 8 20.667 8V5.333C24.348 5.333 27.333 8.318 27.333 12v4.667C27.333 18.507 25.84 20 24 20h-1.333z" fill="rgba(26,86,219,0.6)" />
            </svg>
            <StarRow count={current.stars} />
          </div>
          <p className="relative text-base sm:text-lg font-medium text-white/85 leading-relaxed mb-8">"{current.quote}"</p>
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/40 flex-shrink-0">
              <AppImage src={current.avatar} alt={`${current.author}, ${current.role}`} width={48} height={48} className="object-cover w-full h-full" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-white text-sm">{current.author}</p>
              <p className="text-xs text-white/50">{current.role} · {current.channel}</p>
            </div>
            <span className="text-xs text-white/25 hidden sm:block">Click to see next →</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8">
          {testimonials.items.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          {testimonials.items.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} className={`testimonial-pill p-4 text-left rounded-2xl transition-all ${i === active ? 'border-primary/50 bg-primary/8' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage src={t.avatar} alt={`${t.author} testimonial preview`} width={28} height={28} className="object-cover w-full h-full" />
                </div>
                <span className="text-xs font-bold text-white/70">{t.author}</span>
              </div>
              <p className="text-xs text-white/40 line-clamp-2">{t.quote.slice(0, 70)}…</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
