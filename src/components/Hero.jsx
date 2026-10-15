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
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-end pb-16 md:pb-24 pt-32 overflow-hidden bg-espresso text-warm-white">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          {/* Studio Brand Eyebrow (Primary Brand Focus) */}
          <div className="inline-flex items-center space-x-3 text-xs tracking-widest uppercase text-warm-white/85 font-sans border-b border-sand/30 pb-2">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            <span>Contemporary Photography Studio</span>
            <span className="text-sand/40">/</span>
            <span className="text-sand">{activeImage.credit}</span>
          </div>

          {/* Main Brand Title */}
          <div className="space-y-3">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light tracking-widest-editorial text-warm-white uppercase leading-none drop-shadow-sm">
              {STUDIO_CONFIG.heroHeadline}
            </h1>
            <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-sand font-light">
              &ldquo;{STUDIO_CONFIG.heroSubheadline}&rdquo;
            </p>
          </div>

          {/* Lead Copy */}
          <p className="text-base sm:text-lg text-warm-white/90 font-light max-w-xl leading-relaxed tracking-wide font-sans">
            {STUDIO_CONFIG.heroCopy}
          </p>

          {/* Action Links & Variant Switchers */}
          <div className="pt-4 flex flex-wrap items-center gap-5 sm:gap-8">
            <button
              onClick={scrollToWork}
              className="group inline-flex items-center space-x-3 bg-warm-white text-espresso px-7 py-3.5 text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:bg-terracotta hover:text-warm-white shadow-lg hover:shadow-xl"
            >
              <span>Explore our work</span>
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-1" />
            </button>

            {/* Quick Hero Image Mood Switcher (Editorial Feature) */}
            <div className="hidden sm:flex items-center space-x-2 text-xs text-warm-white/80 bg-espresso/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sand/30">
              <Camera size={13} className="text-terracotta" />
              <span className="text-[11px] uppercase tracking-wider text-sand/70">Mood:</span>
              <div className="flex items-center space-x-1">
                {HERO_VARIANTS.map((variant, idx) => (
                  <button
                    key={variant.id}
                    onClick={() => setActiveVariantIndex(idx)}
                    className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
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
        <div className="mt-16 pt-8 border-t border-sand/20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-sand/75 gap-4">
          <div className="flex items-center space-x-4">
            <span>Visual Storytelling Studio</span>
            <span>·</span>
            <span>Chennai & Beyond</span>
          </div>
          <button
            onClick={scrollToWork}
            className="flex items-center space-x-2 hover:text-warm-white transition-colors group text-sand"
          >
            <span className="uppercase tracking-widest text-[11px]">Scroll to browse stories</span>
            <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
