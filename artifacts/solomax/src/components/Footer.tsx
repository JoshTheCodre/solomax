import React from 'react';
import Icon from './ui/AppIcon';
import copy from '../content/copy.json';

const socialLinks = [
  { icon: 'GlobeAltIcon', href: 'https://solomaxstudios.com', label: 'Website' },
  { icon: 'ChatBubbleLeftIcon', href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer id="footer-contact" className="border-t border-white/8 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <img
            src="/assets/images/smax-logo-new.png"
            alt="SoloMax Studios logo"
            style={{ height: 36, width: 'auto' }}
          />
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          {copy.footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/40 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

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
          <span className="text-xs text-white/30">{copy.footer.copyright} · solomaxstudios.com</span>
        </div>
      </div>
    </footer>
  );
}
