import React, { useState, useRef, useEffect } from 'react';
import Icon from '../components/ui/AppIcon';
import copy from '../content/copy.json';

const getFlagUrl = (iso: string) => `https://flagsapi.com/${iso}/flat/24.png`;

export default function LeadCaptureSection() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState(copy.leadCapture.countries[0]);
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
    <section id="lead-capture" className="relative py-20 px-4 overflow-hidden border-y border-white/10" style={{ background: 'linear-gradient(180deg, rgba(10,10,15,0.50) 0%, rgba(10,10,15,0.82) 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)', backgroundSize: '36px 36px' }} />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_55%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[160px] pointer-events-none" />

      <div ref={ref} className="reveal-hidden relative z-10 max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-2 border border-white/12 rounded-full px-4 py-1.5 mb-6" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-primary/90 animate-ping" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/70">{leadCapture.badge}</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#f5f7fb' }}>
          {leadCapture.headline}
          <br />
          <span style={{ color: 'rgba(255,255,255,0.68)', fontStyle: 'italic', fontWeight: 300 }}>{leadCapture.headlineAccent}</span>
        </h2>
        <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.68)' }}>{leadCapture.description}</p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-12">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(26,86,219,0.12)', border: '1px solid rgba(26,86,219,0.3)' }}>
              <Icon name="CheckCircleIcon" size={32} className="text-primary" variant="solid" />
            </div>
            <p className="text-xl font-display font-bold" style={{ color: '#f5f7fb' }}>{leadCapture.successTitle}</p>
            <p className="text-sm max-w-xs" style={{ color: 'rgba(255,255,255,0.68)' }}>{leadCapture.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icon name="EnvelopeIcon" size={18} className="text-primary/50" />
              </div>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={leadCapture.emailPlaceholder} className="form-input-light w-full rounded-xl px-4 py-4 pl-12 text-sm" aria-label="Email address" />
            </div>
            <div className="flex gap-2">
              <label className="w-[112px] shrink-0">
                <span className="sr-only">Country code</span>
                <select value={country.iso} onChange={(e) => setCountry(leadCapture.countries.find((item) => item.iso === e.target.value) || leadCapture.countries[0])} className="form-input-light w-full rounded-xl px-3 py-4 text-sm h-full">
                  {leadCapture.countries.map((item) => (
                    <option key={item.iso} value={item.iso}>{item.label} {item.code}</option>
                  ))}
                </select>
              </label>
              <div className="relative flex-1">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-2">
                  <img src={getFlagUrl(country.iso)} alt={`${country.label} flag`} className="w-5 h-5 rounded-full object-cover" />
                  <Icon name="PhoneIcon" size={18} className="text-primary/50" />
                </div>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={leadCapture.phonePlaceholder} className="form-input-light w-full rounded-xl px-4 py-4 pl-16 text-sm" aria-label="Phone number" />
              </div>
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
            <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.52)' }}>{leadCapture.disclaimer}</p>
          </form>
        )}
      </div>
    </section>
  );
}
