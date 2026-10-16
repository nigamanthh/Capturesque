import React, { useState } from 'react';
import CategoryCard from './CategoryCard';
import { CATEGORIES, getTotalPhotoCount } from '../data/galleryData';
import { Filter } from 'lucide-react';

const FILTER_OPTIONS = [
  { label: 'All Stories', key: 'all' },
  { label: 'Celebs', key: 'celebs', match: ['celebs'] },
  { label: 'Weddings', key: 'weddings', match: ['weddings'] },
  { label: 'Live & Concerts', key: 'performances', match: ['andrea', 'live-performances'] },
  { label: 'Dance & Stage', key: 'dance', match: ['classical-dance', 'western-dance'] },
  { label: 'Editorial', key: 'editorial', match: ['editorial'] },
];

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const totalPhotos = getTotalPhotoCount();

  const filteredCategories = CATEGORIES.filter(cat => {
    if (activeFilter === 'all') return true;
    const filterObj = FILTER_OPTIONS.find(f => f.key === activeFilter);
    return filterObj && filterObj.match ? filterObj.match.includes(cat.id) : true;
  });

  return (
    <section id="work" className="py-16 sm:py-24 md:py-32 bg-parchment text-espresso border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs tracking-widest-editorial uppercase text-forest font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso font-light tracking-tight leading-tight">
              Stories we&rsquo;ve captured.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-espresso/80 font-light leading-relaxed font-sans">
              Each body of work represents a distinct narrative — from cinema icons and sacred wedding vows to arena rock concerts, classical abhinaya, and intimate cinema portraiture.
            </p>
          </div>

          {/* Quick Counter Stats */}
          <div className="flex items-center space-x-6 text-sm border-l-2 border-sand/60 pl-4 sm:pl-6 py-1 sm:py-2 self-start">
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-light text-terracotta">
                {CATEGORIES.length}
              </div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-forest font-medium">
                Story Series
              </div>
            </div>
            <div className="text-sand font-light text-xl sm:text-2xl">/</div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-light text-espresso">
                {totalPhotos}
              </div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-forest font-medium">
                Original Frames
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar with Smooth Mobile Touch-Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 sm:pb-8 sm:flex-wrap border-b border-sand/40 mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-forest mr-1 sm:mr-2 flex items-center space-x-1.5 font-medium shrink-0">
            <Filter size={13} />
            <span>Filter:</span>
          </span>
          {FILTER_OPTIONS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-3.5 sm:px-4 py-1.5 text-xs tracking-wider uppercase font-medium rounded-full transition-all duration-200 shrink-0 whitespace-nowrap ${
                activeFilter === tab.key
                  ? 'bg-espresso text-warm-white shadow-sm'
                  : 'bg-sand/35 text-espresso/80 hover:bg-sand/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredCategories.map((category, index) => {
            // Give prominent cards an editorial rhythm on wide screens
            const isFeatured = (index === 0 || category.id === 'celebs') && activeFilter === 'all';
            return (
              <CategoryCard
                key={category.id}
                category={category}
                featured={isFeatured}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
