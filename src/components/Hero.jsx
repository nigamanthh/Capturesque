import React, { useState } from 'react';
import { ArrowDown, Camera, Sparkles } from 'lucide-react';
import { STUDIO_CONFIG, CATEGORIES } from '../data/galleryData';

const HERO_VARIANTS = [
  {
    id: 'celebs',
    label: 'Celebs',
    src: '/images/celebs/dushara%20vijayan/DSC_1125.JPG',
    alt: 'Dushara Vijayan cinema portrait',
    credit: 'Celebs & Cinema Series'
  },
  {
    id: 'concert',
    label: 'Live Concerts',
    src: '/images/live-performance/live-performance-6.jpg',
    alt: 'Concert stage illumination with beams',
    credit: 'Stage & Performance Series'
  },
  {
    id: 'wedding',
    label: 'Weddings',
    src: '/images/wedding/wedding1.jpg',
    alt: 'Traditional wedding ceremony ritual moment',
    credit: 'Weddings & Celebrations'
  },
  {
    id: 'classical',
    label: 'Classical Dance',
    src: '/images/classical/classical1.jpg',
    alt: 'Classical Indian dance abhinaya and mudra',
    credit: 'Classical Stage & Abhinaya'
  },
  {
    id: 'andrea',
    label: 'Andrea Jeremiah',
    src: '/images/andrea/andrea1.jpg',
    alt: 'Andrea Jeremiah live vocal spotlight',
    credit: 'Featured Performance Series'
  }
];

export default function Hero() {
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const activeImage = HERO_VARIANTS[activeVariantIndex];

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-end pb-12 sm:pb-20 md:pb-24 pt-28 sm:pt-32 overflow-hidden bg-espresso text-warm-white">
      {/* Background Image Layer with Editorial Fade & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          className="w-full h-full object-cover object-top scale-100 transition-opacity duration-1000 ease-editorial"
          fetchPriority="high"
        />
        {/* Multi-layered cinematic gradient overlays for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-espresso/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/30 to-transparent" />
        {/* Subtle warm grain vignette */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 w-full">
        <div className="max-w-3xl space-y-5 sm:space-y-6 md:space-y-8">
          {/* Studio Brand Eyebrow (Primary Brand Focus) */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] sm:text-xs tracking-widest uppercase text-warm-white/85 font-sans border-b border-sand/30 pb-2 max-w-full">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse shrink-0" />
            <span className="shrink-0">Contemporary Photography Studio</span>
            <span className="text-sand/40 hidden xs:inline">/</span>
            <span className="text-sand shrink-0">{activeImage.credit}</span>
          </div>

          {/* Main Brand Title */}
          <div className="space-y-2 sm:space-y-3">
            <h1 className="font-serif text-[2.25rem] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wider sm:tracking-widest-editorial text-warm-white uppercase leading-[0.95] sm:leading-none drop-shadow-sm break-words">
              {STUDIO_CONFIG.heroHeadline}
            </h1>
            <p className="font-serif italic text-xl sm:text-3xl lg:text-4xl text-sand font-light leading-snug">
              &ldquo;{STUDIO_CONFIG.heroSubheadline}&rdquo;
            </p>
          </div>

          {/* Lead Copy */}
          <p className="text-sm sm:text-base md:text-lg text-warm-white/90 font-light max-w-xl leading-relaxed tracking-wide font-sans">
            {STUDIO_CONFIG.heroCopy}
          </p>

          {/* Action Links & Variant Switchers */}
          <div className="pt-2 sm:pt-4 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-6">
            <button
              onClick={scrollToWork}
              className="group inline-flex items-center justify-center space-x-3 bg-warm-white text-espresso px-6 sm:px-7 py-3.5 text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:bg-terracotta hover:text-warm-white shadow-lg hover:shadow-xl w-full xs:w-auto"
            >
              <span>Explore our work</span>
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-1" />
            </button>

            {/* Quick Hero Image Mood Switcher (Editorial Feature) */}
            <div className="flex items-center space-x-2 text-xs text-warm-white/80 bg-espresso/70 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-full border border-sand/30 overflow-x-auto no-scrollbar max-w-full">
              <Camera size={13} className="text-terracotta shrink-0" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-sand/70 shrink-0">Mood:</span>
              <div className="flex items-center space-x-1 shrink-0">
                {HERO_VARIANTS.map((variant, idx) => (
                  <button
                    key={variant.id}
                    onClick={() => setActiveVariantIndex(idx)}
                    className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] transition-colors whitespace-nowrap ${
                      activeVariantIndex === idx
                        ? 'bg-warm-white text-espresso font-medium'
                        : 'text-sand hover:text-warm-white hover:bg-white/10'
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle anchor info */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-sand/20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-sand/75 gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs">
            <span>Visual Storytelling Studio</span>
            <span>·</span>
            <span>Chennai & Beyond</span>
          </div>
          <button
            onClick={scrollToWork}
            className="flex items-center space-x-2 hover:text-warm-white transition-colors group text-sand text-[11px] sm:text-xs"
          >
            <span className="uppercase tracking-widest">Scroll to browse stories</span>
            <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
