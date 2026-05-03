import React, { useState, useEffect } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetMs: number): TimeLeft {
  const diff = Math.max(0, targetMs - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

interface CountdownTimerProps {
  durationHours?: number;
  label?: string;
}

const STORAGE_KEY = 'solomax_countdown_target';

export default function CountdownTimer({ durationHours = 47, label = 'Offer expires in' }: CountdownTimerProps) {
  const [target] = useState<number>(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return Number(stored);
    const t = Date.now() + durationHours * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000;
    sessionStorage.setItem(STORAGE_KEY, String(t));
    return t;
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { value: pad(timeLeft.hours), label: 'HRS' },
    { value: pad(timeLeft.minutes), label: 'MIN' },
    { value: pad(timeLeft.seconds), label: 'SEC' },
  ];

  return (
    <div className="flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: '0.65s' }}>
      <p className="text-xs font-medium text-white/40 uppercase tracking-[0.2em]">{label}</p>
      <div className="flex items-center gap-2">
        {units.map(({ value, label: unitLabel }, i) => (
          <React.Fragment key={unitLabel}>
            <div className="flex flex-col items-center">
              <div className="countdown-block relative flex items-center justify-center w-14 h-14 rounded-xl border border-white/12 overflow-hidden">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <span className="relative font-display text-2xl font-bold text-white tabular-nums leading-none">
                  {value}
                </span>
              </div>
              <span className="mt-1.5 text-[9px] font-bold tracking-[0.2em] text-white/30">{unitLabel}</span>
            </div>
            {i < units.length - 1 && (
              <span className="text-white/25 text-lg font-light mb-4 select-none">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
