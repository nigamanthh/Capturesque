import React from 'react';
import { STUDIO_CONFIG } from '../data/galleryData';
import { ArrowUp, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso text-warm-white border-t border-sand/20 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-sand/20">
          <div className="space-y-2 sm:space-y-3">
            <Link to="/" className="inline-block">
              <span className="font-serif tracking-widest-editorial text-xl sm:text-3xl font-light uppercase text-warm-white">
                {STUDIO_CONFIG.brandName}
              </span>
            </Link>
            <p className="font-serif italic text-base sm:text-xl text-sand/85">
              &ldquo;{STUDIO_CONFIG.tagline}&rdquo;
            </p>
            <p className="text-xs text-sand/65 font-sans tracking-wide">
              Contemporary editorial photography studio · Available for commissions across India
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-8 text-xs uppercase tracking-wider sm:tracking-widest font-sans text-sand/85">
            <a href="#work" className="hover:text-terracotta transition-colors">
              Stories
            </a>
            <a href="#reels" className="hover:text-terracotta transition-colors">
              Moving Frames
            </a>
            <a href="#about" className="hover:text-terracotta transition-colors">
              About The Team
            </a>
            <a href="#contact" className="hover:text-terracotta transition-colors">
              Inquire
            </a>
            <a
              href={STUDIO_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-terracotta transition-colors"
            >
              <Instagram size={13} />
              <span>Instagram</span>
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-terracotta hover:text-warm-white transition-colors bg-sand/15 px-3 py-1.5 rounded-full border border-sand/25 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:rounded-none sm:pl-4 sm:border-l sm:border-sand/30"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-sand/50 gap-3 font-sans">
          <div>
            &copy; {new Date().getFullYear()} CAPTURESQUE Photography Studio. All rights reserved.
          </div>
          <div>
            Documenting people, performances and authentic narratives.
          </div>
        </div>
      </div>
    </footer>
  );
}
