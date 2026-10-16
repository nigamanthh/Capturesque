import React, { useEffect, useCallback, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function Lightbox({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
  categoryTitle
}) {
  const currentPhoto = photos && photos[currentIndex] ? photos[currentIndex] : null;
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Keyboard navigation listener
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    },
    [isOpen, onClose, onPrev, onNext]
  );

  // Touch swipe support for mobile
  const minSwipeDistance = 45;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }
  };

  // Disable background scrolling while lightbox is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
      className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-md flex flex-col justify-between text-warm-white select-none animate-fadeIn"
      onClick={(e) => {
        // Close if clicked directly on backdrop container
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar: Title, Counter & Close Control */}
      <div className="relative z-20 flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-10 md:py-6 border-b border-sand/20 bg-espresso/90">
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          <span className="text-[11px] sm:text-xs tracking-widest uppercase text-sand font-sans truncate max-w-[150px] sm:max-w-none">
            {categoryTitle || 'Capturesque'}
          </span>
          <span className="text-sand/40">/</span>
          <span className="text-[11px] sm:text-xs font-mono text-terracotta">
            {currentIndex + 1} of {photos.length}
          </span>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <span className="hidden sm:inline-block text-[11px] text-sand/60 uppercase tracking-wider font-sans">
            Esc to close · Arrow keys to navigate
          </span>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-sand hover:text-warm-white hover:bg-sand/15 rounded-full transition-colors"
            aria-label="Close lightbox"
            title="Close (Esc)"
          >
            <X size={22} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center p-2 sm:p-6 md:p-12 overflow-hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Previous Button */}
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 sm:left-6 md:left-10 z-30 p-2 sm:p-3 sm:p-4 rounded-full bg-espresso/80 text-sand hover:text-warm-white hover:bg-terracotta transition-all duration-200 border border-sand/25 shadow-xl hover:scale-105"
            aria-label="Previous photograph"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft size={20} className="sm:w-7 sm:h-7" />
          </button>
        )}

        {/* Central Photograph (Preserves aspect ratio naturally) */}
        <div className="relative max-w-full max-h-[66vh] sm:max-h-[78vh] flex items-center justify-center">
          <img
            key={currentPhoto.src}
            src={currentPhoto.src}
            alt={currentPhoto.alt || 'Photograph'}
            className="max-h-[66vh] sm:max-h-[78vh] max-w-full object-contain rounded-sm shadow-2xl transition-all duration-300 ease-out"
          />
        </div>

        {/* Next Button */}
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 sm:right-6 md:right-10 z-30 p-2 sm:p-3 sm:p-4 rounded-full bg-espresso/80 text-sand hover:text-warm-white hover:bg-terracotta transition-all duration-200 border border-sand/25 shadow-xl hover:scale-105"
            aria-label="Next photograph"
            title="Next (Right Arrow)"
          >
            <ChevronRight size={20} className="sm:w-7 sm:h-7" />
          </button>
        )}
      </div>

      {/* Bottom Bar: Caption & Meta */}
      <div className="relative z-20 px-4 py-3 sm:px-6 sm:py-4 md:px-12 md:py-6 border-t border-sand/20 bg-espresso/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 text-xs">
        <div className="space-y-1 max-w-2xl">
          <h4 className="font-serif text-base sm:text-lg md:text-xl text-warm-white font-light">
            {currentPhoto.title || `Photograph ${currentIndex + 1}`}
          </h4>
          {currentPhoto.caption && (
            <p className="text-sand/80 font-light font-sans text-xs sm:text-sm line-clamp-2 sm:line-clamp-none">
              {currentPhoto.caption}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-3 text-[10px] sm:text-[11px] text-sand/60 uppercase tracking-widest font-mono">
          <span className="flex items-center space-x-1">
            <Camera size={12} className="text-terracotta" />
            <span>{currentPhoto.orientation || 'original'} ratio</span>
          </span>
          <span className="hidden xs:inline">·</span>
          <span className="hidden xs:inline">Swipe or tap arrows</span>
        </div>
      </div>
    </div>
  );
}
