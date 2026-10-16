import React, { useState, useEffect, useCallback } from 'react';
import { Play, Instagram, ArrowUpRight, X, Film, ExternalLink, AlertCircle, Sparkles } from 'lucide-react';
import { REELS_DATA, REELS_SECTION_CONFIG } from '../data/reelsData';

export default function ReelsSection() {
  const [activeReel, setActiveReel] = useState(null);
  const [iframeError, setIframeError] = useState(false);

  const openReelModal = (reel) => {
    setIframeError(false);
    setActiveReel(reel);
  };

  const closeReelModal = () => {
    setActiveReel(null);
    setIframeError(false);
  };

  // Keyboard navigation for modal
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        closeReelModal();
      }
    },
    []
  );

  useEffect(() => {
    if (activeReel) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeReel, handleKeyDown]);

  return (
    <section
      id="reels"
      className="py-16 sm:py-24 md:py-32 bg-espresso text-warm-white border-b border-sand/20 relative overflow-hidden"
    >
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-forest/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs tracking-widest-editorial uppercase text-sand font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span>{REELS_SECTION_CONFIG.eyebrow}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-warm-white font-light tracking-tight leading-tight">
              {REELS_SECTION_CONFIG.heading}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-sand/85 font-light leading-relaxed font-sans">
              {REELS_SECTION_CONFIG.description}
            </p>
          </div>

          {/* Direct Profile CTA */}
          <div className="flex items-center">
            <a
              href={REELS_SECTION_CONFIG.instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-sand/15 hover:bg-terracotta text-warm-white px-5 py-3 rounded-sm border border-sand/30 hover:border-terracotta transition-all duration-300 text-xs uppercase tracking-widest font-medium"
              title="View all reels on Instagram"
            >
              <Instagram size={14} />
              <span>Watch on Instagram</span>
              <ArrowUpRight size={13} className="opacity-75" />
            </a>
          </div>
        </div>

        {/* Reels Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {REELS_DATA.map((reel, index) => (
            <div
              key={reel.id}
              className="group flex flex-col bg-espresso/80 border border-sand/30 rounded-sm overflow-hidden transition-all duration-500 hover:border-terracotta/70 hover:shadow-2xl"
            >
              {/* Vertical Reel Thumbnail Stage (with clear Play Affordance) */}
              <div className="relative aspect-[9/13] sm:aspect-[9/14] overflow-hidden bg-black/40">
                <img
                  src={reel.thumbnail}
                  alt={reel.thumbnailAlt || reel.title}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-editorial group-hover:scale-105"
                />

                {/* Ambient dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-black/40 opacity-80 group-hover:opacity-65 transition-opacity" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none z-10 gap-2">
                  <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 sm:px-3 sm:py-1 bg-espresso/80 backdrop-blur-md text-warm-white text-[10px] uppercase tracking-wider rounded-full border border-sand/25">
                    <Film size={11} className="text-terracotta" />
                    <span>{reel.category}</span>
                  </span>

                  {reel.collabNote && (
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 sm:px-2.5 sm:py-0.5 bg-forest/90 text-warm-white text-[9px] sm:text-[10px] uppercase tracking-wider rounded-sm border border-sand/30 shadow-sm">
                      <Sparkles size={10} className="text-terracotta" />
                      <span>Think Inde Collab</span>
                    </span>
                  )}
                </div>

                {/* Centered Play Affordance */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <button
                    onClick={() => openReelModal(reel)}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-warm-white/95 text-espresso group-hover:bg-terracotta group-hover:text-warm-white flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 border border-sand/40"
                    aria-label={`Play ${reel.title}`}
                    title="Watch reel preview"
                  >
                    <Play size={20} className="ml-1 fill-current sm:w-[22px] sm:h-[22px]" />
                  </button>
                </div>

                {/* Bottom Overlay Hint */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-[11px] text-sand/80 font-sans pointer-events-none">
                  <span>{reel.duration}</span>
                  <span className="group-hover:text-terracotta transition-colors flex items-center space-x-1">
                    <span>Click to play</span>
                  </span>
                </div>
              </div>

              {/* Card Meta & Links */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3.5 sm:space-y-4 bg-espresso/90 border-t border-sand/20">
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-sand/85 font-medium">
                    {reel.subtitle}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-warm-white font-normal group-hover:text-terracotta transition-colors">
                    {reel.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sand/80 font-light leading-relaxed font-sans line-clamp-2">
                    {reel.caption}
                  </p>
                </div>

                {/* Action Buttons: Modal Play + Direct External Link */}
                <div className="pt-3.5 sm:pt-4 border-t border-sand/20 flex items-center justify-between gap-3 text-xs font-sans">
                  <button
                    onClick={() => openReelModal(reel)}
                    className="inline-flex items-center space-x-1.5 text-warm-white hover:text-terracotta uppercase tracking-wider transition-colors font-medium"
                  >
                    <Play size={12} className="fill-current text-terracotta" />
                    <span>Watch In-Page</span>
                  </button>

                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-sand hover:text-warm-white uppercase tracking-wider transition-colors"
                    title="Open directly on Instagram without login requirement"
                  >
                    <span>Direct Link</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reel Modal Player */}
      {activeReel && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeReel.title}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeReelModal();
          }}
        >
          <div className="relative w-full max-w-md bg-espresso border border-sand/30 rounded-sm overflow-hidden shadow-2xl flex flex-col max-h-[92vh] overflow-y-auto">
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-sand/20 bg-espresso shrink-0">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-sand">
                <Film size={14} className="text-terracotta" />
                <span className="truncate max-w-[200px] sm:max-w-[240px]">{activeReel.title}</span>
              </div>
              <button
                onClick={closeReelModal}
                className="p-1.5 text-sand hover:text-warm-white hover:bg-sand/15 rounded-full transition-colors"
                aria-label="Close reel modal"
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body: Responsive Instagram Embed with Fallback */}
            <div className="relative flex-1 bg-black flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px]">
              <iframe
                src={`https://www.instagram.com/p/${activeReel.shortcode}/embed/captioned/`}
                title={activeReel.title}
                className="w-full h-[420px] sm:h-[500px] border-0"
                allowTransparency="true"
                allow="encrypted-media"
                onError={() => setIframeError(true)}
              />

              {/* Direct fallback overlay in case browser blocks cross-origin iframe / third-party cookies */}
              <div className="w-full bg-espresso/95 border-t border-sand/20 p-4 flex flex-col items-center text-center space-y-2">
                <p className="text-xs text-sand/90 font-light">
                  If the embedded reel is restricted by your browser, tap below to open it directly:
                </p>
                <a
                  href={activeReel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-terracotta hover:bg-forest text-warm-white px-5 py-2.5 rounded-sm text-xs uppercase tracking-widest font-medium transition-colors shadow-md"
                >
                  <Instagram size={14} />
                  <span>Open on Instagram</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
