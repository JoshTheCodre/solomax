import React, { useState, useEffect } from 'react';
import Icon from './ui/AppIcon';
import copy from '../content/copy.json';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-dark border-b border-white/10 ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/assets/images/smax-logo-new.png"
            alt="SoloMax Studios logo"
            style={{ height: 40, width: 'auto', cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {copy.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-sm font-medium text-white/70 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={copy.sectionLinks.heroCta}
          className="hidden md:flex btn-primary px-5 py-2 rounded-full text-sm font-semibold"
        >
          {copy.nav.cta}
        </a>

        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full glass-light border border-white/15 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={18} />
        </button>
      </div>
      {menuOpen && (
        <div className="menu-open md:hidden glass-dark border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {copy.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="py-3 px-4 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/8 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={copy.sectionLinks.heroCta}
            onClick={handleLinkClick}
            className="mt-2 btn-primary px-5 py-3 rounded-full text-sm font-semibold text-center"
          >
            {copy.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
