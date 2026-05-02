import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import LeadCaptureSection from './components/LeadCaptureSection';
import TestimonialsSection from './components/TestimonialsSection';
import RatingsSection from './components/RatingsSection';

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Bulletproof Your YouTube Channel 2026',
            applicationCategory: 'EducationalApplication',
            description:
              'The anti-demonetization blueprint for YouTubers. Stay monetized, avoid strikes, and protect your YouTube income in 2026.',
            offers: {
              '@type': 'Offer',
              price: '10.99',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '7000',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SoloMax Studios',
            url: 'https://solomaxstudios.com',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'SoloMax Studios — Bulletproof Your YouTube Channel 2026',
            description:
              'The anti-demonetization blueprint for YouTubers. Stay monetized, avoid strikes, and protect your YouTube income in 2026.',
          }),
        }}
      />

      <Header />

      <main>
        {/* 1. Hero — Cinematic full-bleed + book cover + price + CTA */}
        <HeroSection />

        {/* 2. Lead capture — Email + Phone + Get Offer */}
        <LeadCaptureSection />

        {/* 3. Testimonials — "Does it work for real creators?" */}
        <TestimonialsSection />

        {/* 4. Ratings — "Is it trusted?" */}
        <RatingsSection />
      </main>

      <Footer />
    </>
  );
}