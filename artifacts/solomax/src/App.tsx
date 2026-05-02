import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './pages/HeroSection';
import LeadCaptureSection from './pages/LeadCaptureSection';
import BundleOfferSection from './pages/BundleOfferSection';
import TestimonialsSection from './pages/TestimonialsSection';
import RatingsSection from './pages/RatingsSection';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LeadCaptureSection />
        <BundleOfferSection />
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
