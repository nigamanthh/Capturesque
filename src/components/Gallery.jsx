import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Maximize2, Share2, Check, Filter } from 'lucide-react';
import Lightbox from './Lightbox';

export default function Gallery({ category }) {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [personalityFilter, setPersonalityFilter] = useState('all');

  if (!category) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-parchment">
        <h2 className="font-serif text-3xl mb-4 text-espresso">Gallery Not Found</h2>
        <p className="text-espresso/70 mb-6 font-sans">The requested photography collection could not be located.</p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-espresso text-warm-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-terracotta transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Return to Stories</span>
        </Link>
      </div>
    );
  }

  // Filter photos if personality filter is applied (e.g. for Celebs category)
  const displayPhotos = category.personalities
    ? category.photos.filter((p) => {
        if (personalityFilter === 'all') return true;
        return p.personalityKey === personalityFilter;
      })
    : category.photos;

  const openLightboxAt = (index) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? displayPhotos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prev) => (prev === displayPhotos.length - 1 ? 0 : prev + 1));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="pt-28 pb-24 md:pb-36 bg-parchment min-h-screen text-espresso">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Navigation / Breadcrumb Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-sand/40">
          <button
            onClick={() => navigate('/#work')}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-espresso hover:text-terracotta font-medium group transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to All Stories</span>
          </button>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center space-x-1.5 text-xs text-forest hover:text-espresso uppercase tracking-wider transition-colors"
              title="Copy link to this gallery"
            >
              {copiedLink ? <Check size={13} className="text-forest" /> : <Share2 size={13} />}
              <span>{copiedLink ? 'Link Copied' : 'Share Gallery'}</span>
            </button>
            <span className="text-sand">|</span>
            <span className="text-xs uppercase tracking-wider text-forest font-medium">
              {displayPhotos.length} {displayPhotos.length === 1 ? 'Photograph' : 'Photographs'}
            </span>
          </div>
        </div>

        {/* Gallery Title & Editorial Introduction */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="text-xs uppercase tracking-widest-editorial text-forest font-medium">
            {category.subtitle || 'Series'}
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-espresso tracking-tight leading-none">
            {category.title}
          </h1>
          <p className="text-base sm:text-lg text-espresso/80 font-light leading-relaxed font-sans pt-2">
            {category.description}
          </p>

        </div>

        {/* Sub-series / Personality Filter Bar for Multi-Subject Collections (e.g. Celebs) */}
        {category.personalities && (
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pb-8 mb-10 border-b border-sand/40">
            <span className="text-xs uppercase tracking-widest text-forest mr-2 flex items-center space-x-1.5 font-medium">
              <Filter size={13} />
              <span>Series:</span>
            </span>
            {category.personalities.map((item) => {
              const count =
                item.id === 'all'
                  ? category.photos.length
                  : category.photos.filter((p) => p.personalityKey === item.id).length;
              return (
                <button
                  key={item.id}
                  onClick={() => setPersonalityFilter(item.id)}
                  className={`px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium rounded-full transition-all duration-200 flex items-center space-x-1.5 ${
                    personalityFilter === item.id
                      ? 'bg-espresso text-warm-white shadow-sm'
                      : 'bg-sand/35 text-espresso/80 hover:bg-sand/60'
                  }`}
                >
                  <span>{item.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      personalityFilter === item.id ? 'bg-warm-white/20 text-warm-white' : 'text-forest font-semibold'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Masonry / Editorial Photo Grid (Preserves Natural Proportions) */}
        <div className="masonry-grid">
          {displayPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightboxAt(idx)}
              className="masonry-item group relative cursor-pointer overflow-hidden bg-warm-white border border-sand/50 transition-all duration-300 hover:shadow-2xl hover:border-forest"
            >
              {/* Image element with natural proportion (no forced square cropping) */}
              <img
                src={photo.src}
                alt={photo.alt || `${category.title} frame ${idx + 1}`}
                loading={idx < 3 ? 'eager' : 'lazy'}
                className="w-full h-auto block transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
              />

              {/* Hover Overlay with Editorial Meta */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-warm-white">
                <div className="flex justify-between items-start">
                  {photo.personality && (
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-espresso/80 backdrop-blur-sm rounded-sm border border-sand/30 text-sand">
                      {photo.personality}
                    </span>
                  )}
                  <span className="p-2 rounded-full bg-espresso/70 backdrop-blur-sm text-warm-white/90 border border-sand/30 ml-auto">
                    <Maximize2 size={14} />
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-sand">
                    Frame #{idx + 1}
                  </span>
                  <h4 className="font-serif text-lg font-normal leading-snug">
                    {photo.title || `Frame ${idx + 1}`}
                  </h4>
                  {photo.caption && (
                    <p className="text-xs text-warm-white/80 line-clamp-2 font-light font-sans">
                      {photo.caption}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Gallery Navigation Bar */}
        <div className="mt-20 pt-8 border-t border-sand/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => navigate('/#work')}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-espresso hover:text-terracotta font-medium group transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Return to Portfolio Grid</span>
          </button>

          <div className="text-xs text-forest font-sans">
            Photographed by <span className="text-espresso font-medium">CAPTURESQUE</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        photos={displayPhotos}
        currentIndex={currentPhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
        categoryTitle={category.title}
      />
    </div>
  );
}
