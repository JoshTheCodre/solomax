import React, { useState, useRef, useEffect } from 'react';
import Icon from '../components/ui/AppIcon';
import copy from '../content/copy.json';

export default function LeadCaptureSection() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { leadCapture } = copy;

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <section id="lead-capture" className="relative py-20 px-4 overflow-hidden" style={{ background: 'var(--light-bg)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)', backgroundSize: '36px 36px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/10 blur-[120px] pointer-events-none" />

      <div ref={ref} className="reveal-hidden relative z-10 max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1.5 mb-6" style={{ background: 'rgba(255,255,255,0.12)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          <span className="text-xs font-bold uppercase tracking-widest text-white">{leadCapture.badge}</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: 'var(--light-foreground)' }}>
          {leadCapture.headline}
          <br />
          <span style={{ color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', fontWeight: 300 }}>{leadCapture.headlineAccent}</span>
        </h2>
        <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>{leadCapture.description}</p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-12">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(26,86,219,0.12)', border: '1px solid rgba(26,86,219,0.3)' }}>
              <Icon name="CheckCircleIcon" size={32} className="text-primary" variant="solid" />
            </div>
            <p className="text-xl font-display font-bold" style={{ color: 'var(--light-foreground)' }}>{leadCapture.successTitle}</p>
            <p className="text-sm max-w-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>{leadCapture.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icon name="EnvelopeIcon" size={18} className="text-primary/50" />
              </div>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={leadCapture.emailPlaceholder} className="form-input-light w-full rounded-xl px-4 py-4 pl-12 text-sm" aria-label="Email address" />
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icon name="PhoneIcon" size={18} className="text-primary/50" />
              </div>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={leadCapture.phonePlaceholder} className="form-input-light w-full rounded-xl px-4 py-4 pl-12 text-sm" aria-label="Phone number" />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <Icon name="BoltIcon" size={16} variant="solid" />
                  {leadCapture.submitCta}
                </>
              )}
            </button>
            <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{leadCapture.disclaimer}</p>
          </form>
        )}
      </div>
    </section>
  );
}
