import React, { useState, useEffect, useRef } from 'react';
import AppImage from '../components/ui/AppImage';
import copy from '../content/copy.json';

type FormState = 'idle' | 'submitting' | 'success';

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3 h-3 star-filled" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function FreeCopySection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [showModal, setShowModal] = useState(false);
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('reveal'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showModal]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !reason.trim()) return;
    setFormState('submitting');

    const sheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL as string | undefined;
    if (sheetsUrl) {
      fetch(sheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ name, email, reason, submittedAt: new Date().toISOString() }),
      }).catch(() => {});
    }

    setTimeout(() => {
      setFormState('success');
      setShowModal(true);
    }, 1500);
  };

  const { testimonials, sectionLinks } = copy;

  return (
    <>
      <section
        id="free-copy"
        ref={ref}
        className="reveal-hidden relative py-24 px-4 overflow-hidden border-t border-white/10 bg-[#0A0A0F]"
      >
        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="free-copy-orb-a absolute w-[500px] h-[500px] rounded-full opacity-[0.11]"
            style={{ background: 'radial-gradient(circle, #1A56DB, transparent 70%)', top: '-15%', right: '-5%' }}
          />
          <div
            className="free-copy-orb-b absolute w-[380px] h-[380px] rounded-full opacity-[0.09]"
            style={{ background: 'radial-gradient(circle, #63B3ED, transparent 70%)', bottom: '0%', left: '-8%' }}
          />
          <div className="grid-dots absolute inset-0 opacity-20" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400 mb-3">✦ Free Preview Edition</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Real Insights.{' '}
              <em className="font-light italic text-white/65">No Cost.</em>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
              The preview edition delivers the core framework — genuine strategies you can act on right away. It's a meaningful starting point. Creators who want the complete system choose the full 80-page blueprint.
            </p>
          </div>

          {/* Two-column */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: book + bullets */}
            <div className="flex flex-col items-center lg:items-start gap-8">
              <div
                className="book-float mx-auto lg:mx-0"
                style={{ filter: 'drop-shadow(0 30px 60px rgba(26,86,219,0.45)) drop-shadow(0 8px 20px rgba(0,0,0,0.6))' }}
              >
                <AppImage
                  src="/free-book-cover.jpeg"
                  alt="Bulletproof Your YouTube Channel — Free Preview Edition"
                  width={200}
                  height={240}
                  className="object-contain rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35 mb-1">What's in the preview</p>
                {[
                  'The 3 most-violated YouTube policies — and how to fix them',
                  'Core monetization mindset every creator needs',
                  'Real examples from channels that bounced back',
                  'Download instantly. No credit card, no sign-up.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <span className="text-amber-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              {/* Upgrade nudge — desktop only */}
              <div className="hidden lg:block border border-white/8 rounded-xl p-4 bg-white/[0.02] text-xs text-white/40 leading-relaxed">
                <span className="text-white/55 font-semibold block mb-1">Ready to go all-in?</span>
                The full edition adds the complete appeals framework, content audit system, and the Strike Response Playbook — everything a serious creator needs.{' '}
                <a href={sectionLinks.heroCta} className="text-primary underline underline-offset-2 hover:text-accent transition-colors">
                  Get it for $25 →
                </a>
              </div>
            </div>

            {/* Right: form or success */}
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center gap-5 py-12">
                <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center pulse-glow">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#63B3ED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">You're all set.</h3>
                <p className="text-white/50 text-sm max-w-xs leading-relaxed">
                  Enjoy the preview, genuinely hope it helps. We have a feeling you'll be back for the full copy. Good luck out there.
                </p>
                <p className="text-white/25 text-xs italic">— The SoloMax team</p>
              </div>
            ) : (
              <div className="free-copy-card-outer">
                <div className="free-copy-card-inner p-8 sm:p-10">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Johnson"
                        className="form-input w-full px-4 py-3 rounded-xl text-sm"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="form-input w-full px-4 py-3 rounded-xl text-sm"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                        Why do you need this?
                      </label>
                      <textarea
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder="Tell us about your channel and the challenges you're facing…"
                        className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                        rows={4}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="btn-primary pulse-glow px-8 py-4 rounded-full text-sm font-bold mt-1 disabled:opacity-60 disabled:cursor-not-allowed w-full"
                    >
                      {formState === 'submitting' ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        'Claim My Free Preview →'
                      )}
                    </button>

                    <p className="text-center text-[11px] text-white/25 leading-relaxed">
                      No spam. No credit card. We review every request personally.
                    </p>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          />

          {/* Card */}
          <div className="relative bg-[#0D0D14] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/12 text-white/40 hover:text-white transition-all"
              aria-label="Close"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1">
              {/* Header */}
              <div className="px-7 pt-8 pb-6 text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary/85">7,000+ creators protected</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2.5">
                  Why Serious Creators Choose{' '}
                  <em className="font-light italic text-white/75">the Full Edition</em>
                </h3>
                <p className="text-xs text-white/40 leading-relaxed max-w-sm mx-auto">
                  The preview gives you a strong foundation. Here's what creators discovered when they went all-in.
                </p>
              </div>

              {/* Testimonials */}
              <div className="px-5 pb-5 flex flex-col gap-3 border-b border-white/[0.07]">
                {testimonials.items.map((t, i) => (
                  <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-9 h-9 rounded-full object-cover border border-white/15 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <StarRow count={t.stars} />
                      <p className="text-xs text-white/70 leading-relaxed italic mt-1.5 mb-2">
                        "{t.quote.length > 115 ? t.quote.slice(0, 115) + '…' : t.quote}"
                      </p>
                      <p className="text-[11px] text-white/35 font-medium">
                        {t.author} · <span className="text-white/25">{t.channel}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-7 py-6">

                {/* Stitch divider */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex-1 border-t border-dashed border-white/[0.12]" />
                  <span className="text-[11px] font-semibold text-white/35 whitespace-nowrap tracking-wide">
                    or continue with the free preview
                  </span>
                  <div className="flex-1 border-t border-dashed border-white/[0.12]" />
                </div>

                {/* Collapsible trigger */}
                <button
                  onClick={() => setCollapsibleOpen(!collapsibleOpen)}
                  className="btn-free-copy-alt w-full px-5 py-3.5 rounded-xl text-sm !justify-between"
                >
                  <span>Get the full free preview</span>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className={`transition-transform duration-300 flex-shrink-0 ${collapsibleOpen ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Collapsible body */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${collapsibleOpen ? 'max-h-[420px] mt-3 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="rounded-xl overflow-hidden border border-amber-400/20">
                    {/* Warm top accent line */}
                    <div className="h-px bg-gradient-to-r from-amber-400/70 via-amber-300/40 to-transparent" />

                    <div className="px-5 py-5 bg-gradient-to-br from-amber-950/30 via-[#0D0D14] to-[#0D0D14] flex flex-col gap-4">
                      {/* Message */}
                      <div className="flex gap-3 items-start">
                        <svg className="w-6 h-6 text-amber-400/50 flex-shrink-0 mt-0.5" viewBox="0 0 32 32" fill="currentColor">
                          <path d="M9.333 20C7.493 20 6 18.507 6 16.667V12c0-3.682 2.985-6.667 6.667-6.667v2.667C10.791 8 9.333 9.458 9.333 11.333V12H12c1.84 0 3.333 1.493 3.333 3.333v1.334C15.333 18.507 13.84 20 12 20H9.333zm13.334 0c-1.84 0-3.334-1.493-3.334-3.333v-1.334C19.333 13.493 20.827 12 22.667 12H24V11.333C24 9.458 22.542 8 20.667 8V5.333C24.348 5.333 27.333 8.318 27.333 12v4.667C27.333 18.507 25.84 20 24 20h-1.333z" />
                        </svg>
                        <div className="flex flex-col gap-2.5">
                          <p className="text-sm text-white/80 leading-relaxed font-medium">
                            Good choice, and we genuinely mean it.
                          </p>
                          <p className="text-xs text-white/50 leading-relaxed">
                            The preview has real stuff in it. You'll get value, no doubt. But somewhere along the way, something's going to click and you'll want the rest. Not because we said so, but because you'll feel the gap. The full edition is for the creator who's past the "maybe I should do something" stage and is ready to actually move. That's all it is.
                          </p>
                          <p className="text-xs font-semibold text-amber-400/80">
                            Either way, you're already ahead. ✓
                          </p>
                        </div>
                      </div>

                      {/* Download */}
                      <a
                        href="/YouTube_Demonetization_Free_Preview.pdf"
                        download
                        className="btn-primary flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold"
                        onClick={() => setShowModal(false)}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                        </svg>
                        Download Free Preview
                      </a>
                    </div>
                  </div>
                </div>

                {/* Upgrade nudge */}
                <div className="mt-5 pt-5 border-t border-white/[0.06] text-center">
                  <p className="text-[11px] text-white/25 leading-relaxed">
                    Want the complete 80-page system?{' '}
                    <a
                      href={sectionLinks.heroCta}
                      className="text-primary/70 underline underline-offset-2 hover:text-primary transition-colors"
                    >
                      Get the full edition for $25 →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
