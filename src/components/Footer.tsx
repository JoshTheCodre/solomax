import React from 'react';

import Icon from '@/components/ui/AppIcon';


const footerLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Contact', href: '#contact' },
  { label: 'About', href: '#about' },
];

const socialLinks = [
  { icon: 'GlobeAltIcon', href: '#', label: 'YouTube' },
  { icon: 'ChatBubbleLeftIcon', href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo only — no following text */}
        <div className="flex items-center">
          <img
            src="/assets/images/logo-smax-new-removebg-preview-1777750285549.png"
            alt="SoloMax Studios logo"
            style={{ height: 52, width: 'auto', filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/40 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright + Social */}
        <div className="flex items-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all"
            >
              <Icon name={s.icon as any} size={16} />
            </a>
          ))}
          <span className="text-xs text-white/30">© 2026 SoloMax Studios</span>
        </div>
      </div>
    </footer>
  );
}