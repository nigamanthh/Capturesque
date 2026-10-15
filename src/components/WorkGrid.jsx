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
    <section id="work" className="py-24 md:py-32 bg-parchment text-espresso border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs tracking-widest-editorial uppercase text-forest font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-espresso font-light tracking-tight">
              Stories we&rsquo;ve captured.
            </h2>
            <p className="text-base sm:text-lg text-espresso/80 font-light leading-relaxed font-sans">
              Each body of work represents a distinct narrative — from cinema icons and sacred wedding vows to arena rock concerts, classical abhinaya, and intimate cinema portraiture.
            </p>
          </div>

          {/* Quick Counter Stats */}
          <div className="flex items-center space-x-6 text-sm border-l-2 border-sand/60 pl-6 py-2">
            <div>
              <div className="font-serif text-3xl font-light text-terracotta">
                {CATEGORIES.length}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-forest font-medium">
                Story Series
              </div>
            </div>
            <div className="text-sand font-light text-2xl">/</div>
            <div>
              <div className="font-serif text-3xl font-light text-espresso">
                {totalPhotos}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-forest font-medium">
                Original Frames
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-10 border-b border-sand/40 mb-12">
          <span className="text-xs uppercase tracking-widest text-forest mr-2 flex items-center space-x-1.5 font-medium">
            <Filter size={13} />
            <span>Filter:</span>
          </span>
          {FILTER_OPTIONS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-1.5 text-xs tracking-wider uppercase font-medium rounded-full transition-all duration-200 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
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
