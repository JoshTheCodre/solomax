import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './pages/HeroSection';
import LeadCaptureSection from './pages/LeadCaptureSection';
import WhyReadersLoveItSection from './pages/WhyReadersLoveItSection';
import TestimonialsSection from './pages/TestimonialsSection';
import RatingsSection from './pages/RatingsSection';

function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Bulletproof Your YouTube Channel 2026',
            applicationCategory: 'EducationalApplication',
            description: 'The anti-demonetization blueprint for YouTubers. Stay monetized, avoid strikes, and protect your YouTube income in 2026.',
            offers: { '@type': 'Offer', price: '25.00', priceCurrency: 'USD' },
            aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '7000' },
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
            description: 'The anti-demonetization blueprint for YouTubers. Stay monetized, avoid strikes, and protect your YouTube income in 2026.',
          }),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <LeadCaptureSection />
        <WhyReadersLoveItSection />
        <TestimonialsSection />
        <RatingsSection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return <HomePage />;
}

export default App;
