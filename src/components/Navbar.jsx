import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/galleryData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isDarkHero = location.pathname === '/' && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-parchment/90 backdrop-blur-md py-3.5 sm:py-4 border-b border-sand/40 text-espresso shadow-sm'
          : isDarkHero
          ? 'bg-gradient-to-b from-espresso/85 via-espresso/40 to-transparent py-4 sm:py-6 text-warm-white'
          : 'bg-parchment/95 py-4 sm:py-5 border-b border-sand/40 text-espresso'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          to="/"
          className="group flex flex-col items-start transition-opacity hover:opacity-80"
          aria-label="CAPTURESQUE Home"
        >
          <span className="font-serif tracking-widest-editorial text-lg sm:text-2xl font-light uppercase">
            {STUDIO_CONFIG.brandName}
          </span>
          <span
            className={`text-[8px] sm:text-[9px] tracking-widest uppercase transition-colors duration-300 font-sans ${
              isDarkHero ? 'text-ivory/60' : 'text-muted-olive'
            }`}
          >
            Photography Collective
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-9 text-xs tracking-widest uppercase font-medium">
          <button
            onClick={() => handleNavClick('work')}
            className={`transition-colors duration-200 hover:text-terracotta relative py-1 ${
              isDarkHero ? 'text-warm-white/90' : 'text-espresso'
            }`}
          >
            Stories
          </button>
          <button
            onClick={() => handleNavClick('reels')}
            className={`transition-colors duration-200 hover:text-terracotta relative py-1 ${
              isDarkHero ? 'text-warm-white/90' : 'text-espresso'
            }`}
          >
            Moving Frames
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors duration-200 hover:text-terracotta relative py-1 ${
              isDarkHero ? 'text-warm-white/90' : 'text-espresso'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors duration-200 hover:text-terracotta relative py-1 ${
              isDarkHero ? 'text-warm-white/90' : 'text-espresso'
            }`}
          >
            Contact
          </button>

          {/* Instagram link */}
          <a
            href={STUDIO_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Follow CAPTURESQUE on Instagram"
            className={`flex items-center space-x-1.5 transition-colors duration-200 hover:text-terracotta pl-4 border-l ${
              isDarkHero ? 'border-warm-white/20 text-warm-white/80' : 'border-sand/60 text-espresso/80'
            }`}
          >
            <Instagram size={14} />
            <span className="text-[11px] lowercase tracking-normal">@snuc_capturesque</span>
            <ArrowUpRight size={11} className="opacity-60" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 -mr-1 rounded-sm transition-colors ${
            isDarkHero ? 'text-warm-white hover:bg-white/10' : 'text-espresso hover:bg-black/5'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-parchment text-espresso border-b border-sand/40 px-5 sm:px-6 py-6 space-y-6 shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="flex flex-col space-y-2 text-sm tracking-widest uppercase font-medium">
            <button
              onClick={() => handleNavClick('work')}
              className="text-left py-3 border-b border-sand/30 hover:text-terracotta flex items-center justify-between"
            >
              <span>Stories & Work</span>
              <span className="text-sand text-xs">→</span>
            </button>
            <button
              onClick={() => handleNavClick('reels')}
              className="text-left py-3 border-b border-sand/30 hover:text-terracotta flex items-center justify-between"
            >
              <span>Moving Frames (Reels)</span>
              <span className="text-sand text-xs">→</span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-3 border-b border-sand/30 hover:text-terracotta flex items-center justify-between"
            >
              <span>About The Studio</span>
              <span className="text-sand text-xs">→</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-3 border-b border-sand/30 hover:text-terracotta flex items-center justify-between"
            >
              <span>Book / Contact</span>
              <span className="text-sand text-xs">→</span>
            </button>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-espresso/70">
            <a
              href={STUDIO_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-espresso hover:text-terracotta"
            >
              <Instagram size={15} />
              <span>{STUDIO_CONFIG.contact.instagramHandle}</span>
            </a>
            <span className="text-[10px] uppercase tracking-wider text-forest font-medium">
              Capturesque Studio
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
