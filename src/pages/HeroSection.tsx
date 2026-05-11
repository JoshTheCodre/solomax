import React, { useRef } from 'react';
import AppImage from '../components/ui/AppImage';
import CountdownTimer from '../components/CountdownTimer';
import copy from '../content/copy.json';

const avatarUrls = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  'https://images.unsplash.com/photo-1675469675830-11d9a6099ef4?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
];

export default function HeroSection() {
  const scanRef = useRef<HTMLDivElement>(null);
  const { hero } = copy;

  return (
    <section
      id="book"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/10"
      style={{ minHeight: '100svh' }}
    >
      <div className="absolute inset-0 z-0">
        <div style={{ position: 'absolute', inset: 0 }}>
          <AppImage
            src="https://images.unsplash.com/photo-1632042704576-7ae3ef405c78"
            alt="Misty golden sunrise over a calm lake"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 35%' }}
          />
        </div>
        <div className="absolute inset-0 hero-scrim" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/40 via-transparent to-[#0A0A0F]/80" />
        <div className="absolute inset-0 grid-dots opacity-30" />
      </div>
      <div
        ref={scanRef}
        className="hero-scan absolute left-0 right-0 h-40 z-10 pointer-events-none"
        style={{ top: 0 }}
      />
      <div className="relative z-20 flex flex-col items-center text-center px-4 pt-24 pb-16 w-full max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8 glass-light border border-white/15 rounded-full px-5 py-2.5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex -space-x-2">
            {avatarUrls.map((url, i) => (
              <div key={i} className="w-7 h-7 rounded-full border-2 border-white/30 overflow-hidden">
                <AppImage src={url} alt={`Creator ${i + 1}`} width={28} height={28} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
          <span className="text-sm font-medium text-white/90">
            <span className="text-white font-bold">{hero.socialProof.count}</span> {hero.socialProof.label}
          </span>
        </div>

        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-3 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          {hero.headline}
          <br />
          <em className="font-light italic text-white/90">{hero.headlineItalic}</em>
        </h1>
        <p
          className="text-base sm:text-lg font-medium text-white mb-2 animate-fade-up tracking-wide uppercase"
          style={{ animationDelay: '0.3s' }}
        >
          {hero.subheadline}
        </p>
        <p
          className="text-sm text-white/55 max-w-md mb-8 animate-fade-up"
          style={{ animationDelay: '0.35s' }}
        >
          {hero.tagline}
        </p>

        <div className="relative mb-6 animate-fade-up flex flex-col items-center" style={{ animationDelay: '0.4s' }}>
          <div className="mb-3">
            <CountdownTimer />
          </div>
          <a
            href="#free-copy"
            className="btn-free-copy-alt px-7 py-3.5 rounded-full text-sm mb-5"
          >
            ✦ Or explore the free preview edition
          </a>
          <div className="book-float">
            <AppImage
              src="/assets/images/book-cover-main.png"
              alt="Bulletproof Your YouTube Channel 2026 book cover"
              width={280}
              height={320}
              className="object-contain drop-shadow-2xl rounded-lg"
            />
          </div>
        </div>

        <div
          className="w-full max-w-sm mb-6 animate-fade-up flex flex-col items-center gap-2 sm:gap-3"
          style={{ animationDelay: '0.43s' }}
        >
          <div className="flex flex-col items-center gap-0.5 sm:gap-1 leading-none text-center">
            <span className="font-sans text-[11px] sm:text-xs font-semibold text-white/65 tracking-[0.32em] uppercase whitespace-nowrap">
              E-Book by
            </span>
            <span
              className="font-display text-2xl sm:text-2xl font-bold italic whitespace-nowrap"
              style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #93c5fd 50%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SoloMax Studios
            </span>
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-white/35 uppercase whitespace-nowrap">
              [PDF]
            </span>
          </div>
          <ul className="flex flex-col items-center gap-1.5 text-white/70 text-sm font-medium">
            <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Instant PDF access</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> No subscriptions</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Read at your own pace</li>
          </ul>
        </div>

        <a
          href={copy.sectionLinks.heroCta}
          className="btn-primary pulse-glow px-10 py-4 rounded-full text-base font-bold mb-6 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          {hero.cta}
        </a>

        <div className="flex flex-col items-center gap-1 mb-4 animate-fade-up" style={{ animationDelay: '0.55s' }}>
          <span className="text-4xl font-display font-bold text-white">{hero.price}</span>
          <span className="text-sm text-white/50">
            Formally <span className="price-strike font-semibold">{hero.originalPrice}</span>
          </span>
        </div>

        <div
          className="urgency-text flex items-center gap-2 text-primary font-semibold text-sm tracking-wide animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          <span className="w-2 h-2 rounded-full bg-primary inline-block animate-ping" />
          {hero.urgency}
        </div>

        <button
          className="mt-10 animate-bounce opacity-60 hover:opacity-100 transition-opacity cursor-pointer bg-transparent border-none p-0"
          aria-label="Scroll to next section"
          onClick={() => {
            const next = document.getElementById('lead-capture');
            if (next) next.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </button>
      </div>
    </section>
  );
}
