'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const avatarUrls = [
'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80',
'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80'];


export default function HeroSection() {
  const scanRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="book"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: '100svh' }}>
      {/* Background: atmospheric misty blue/golden scene */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1632042704576-7ae3ef405c78"
          alt="Misty golden sunrise over a calm lake, dark atmospheric environment with warm golden light reflecting on water, deep shadows in foreground"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center" />
        
        {/* Scrim: dark overlay for white text legibility */}
        <div className="absolute inset-0 hero-scrim" />
        {/* Blue tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/40 via-transparent to-[#0A0A0F]/80" />
        {/* Dot grid */}
        <div className="absolute inset-0 grid-dots opacity-30" />
      </div>
      {/* Scan line */}
      <div
        ref={scanRef}
        className="hero-scan absolute left-0 right-0 h-40 z-10 pointer-events-none"
        style={{ top: 0 }} />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 pt-28 pb-16 w-full max-w-3xl mx-auto">

        {/* Social proof bar */}
        <div className="flex items-center gap-3 mb-8 glass-light border border-white/15 rounded-full px-5 py-2.5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex -space-x-2">
            {avatarUrls?.map((url, i) =>
            <div
              key={i}
              className="w-7 h-7 rounded-full border-2 border-white/30 overflow-hidden">
              
                <AppImage
                src={url}
                alt={`Creator ${i + 1} who purchased the book`}
                width={28}
                height={28}
                className="object-cover w-full h-full" />
              
              </div>
            )}
          </div>
          <span className="text-sm font-medium text-white/90">
            <span className="text-white font-bold">7,000+</span> creators already protected
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-3 animate-fade-up"
          style={{ animationDelay: '0.2s' }}>
          
          Bulletproof Your
          <br />
          <em className="font-light italic text-white/90">YouTube Channel</em>
        </h1>
        <p
          className="text-base sm:text-lg font-medium text-primary/90 mb-2 animate-fade-up tracking-wide uppercase"
          style={{ animationDelay: '0.3s' }}>
          
          The Anti-Demonetization Blueprint — 2026
        </p>
        <p
          className="text-sm text-white/55 max-w-md mb-8 animate-fade-up"
          style={{ animationDelay: '0.35s' }}>
          
          Stay Monetized. Avoid Strikes. Protect Your YouTube Income.
        </p>

        {/* Book Cover — floating */}
        <div
          className="book-float mb-8 animate-fade-up"
          style={{ animationDelay: '0.4s' }}>
          
          <AppImage
            src="/assets/images/book-cover-2-1777748964023.png"
            alt="Bulletproof Your YouTube Channel 2026 book cover, anti-demonetization blueprint with blue and black design"
            width={360}
            height={500}
            priority
            className="object-contain drop-shadow-2xl" />
          
        </div>

        {/* Primary CTA */}
        <a
          href="#lead-capture"
          className="btn-primary pulse-glow px-10 py-4 rounded-full text-base font-bold mb-6 animate-fade-up"
          style={{ animationDelay: '0.5s' }}>
          
          Get Instant Access
        </a>

        {/* Price */}
        <div className="flex flex-col items-center gap-1 mb-4 animate-fade-up" style={{ animationDelay: '0.55s' }}>
          <span className="text-4xl font-display font-bold text-white">$10.99</span>
          <span className="text-sm text-white/50">
            Normally <span className="price-strike font-semibold">$36.99</span>
          </span>
        </div>

        {/* Urgency */}
        <div
          className="urgency-text flex items-center gap-2 text-primary font-semibold text-sm tracking-wide animate-fade-up"
          style={{ animationDelay: '0.6s' }}>
          
          <span className="w-2 h-2 rounded-full bg-primary inline-block animate-ping" />
          Limited-Time Offer — Ends Soon
        </div>

        {/* Scroll indicator */}
        <button
          className="mt-10 animate-bounce opacity-60 hover:opacity-100 transition-opacity cursor-pointer bg-transparent border-none p-0"
          aria-label="Scroll to next section"
          onClick={() => {
            const next = document.getElementById('lead-capture');
            if (next) next?.scrollIntoView({ behavior: 'smooth' });
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