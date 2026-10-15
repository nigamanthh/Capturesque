import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera } from 'lucide-react';

export default function CategoryCard({ category, featured = false, index = 0 }) {
  return (
    <Link
      to={`/gallery/${category.slug || category.id}`}
      className={`group relative flex flex-col bg-warm-white border border-sand/50 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-forest/50 img-editorial-card ${
        featured ? 'md:col-span-2' : ''
      }`}
      aria-label={`View ${category.title} gallery`}
    >
      {/* Image Container with Editorial Zoom */}
      <div className={`relative overflow-hidden bg-espresso/10 ${featured ? 'h-80 sm:h-96' : 'h-72 sm:h-80'}`}>
        <img
          src={category.coverImage}
          alt={category.coverAlt || category.title}
          loading={index < 2 ? 'eager' : 'lazy'}
          style={{ objectPosition: category.coverPosition || 'center 20%' }}
          className="w-full h-full object-cover img-editorial-zoom"
        />

        {/* Ambient Dark Gradient for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          {/* Photo Count Pill */}
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-espresso/80 backdrop-blur-md text-warm-white text-[11px] uppercase tracking-wider rounded-full border border-sand/30">
            <Camera size={12} className="text-terracotta" />
            <span>{category.photos.length} {category.photos.length === 1 ? 'Photograph' : 'Photographs'}</span>
          </span>
        </div>

        {/* Bottom Hover Hint */}
        <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-warm-white text-espresso flex items-center justify-center shadow-lg group-hover:bg-terracotta group-hover:text-warm-white transition-colors">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>

      {/* Card Information */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-warm-white border-t border-sand/30">
        <div className="space-y-2">
          <div className="text-[11px] uppercase tracking-widest text-forest font-medium">
            {category.subtitle || 'Series'}
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-normal group-hover:text-terracotta transition-colors">
            {category.title}
          </h3>
          <p className="text-sm text-espresso/80 font-light leading-relaxed line-clamp-2 pt-1 font-sans">
            {category.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-sand/30 flex items-center justify-between text-xs font-medium tracking-widest uppercase text-espresso/70">
          <span className="group-hover:text-terracotta transition-colors flex items-center space-x-1.5">
            <span>Explore Gallery</span>
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </span>
          <span className="text-[11px] text-forest/90 font-normal lowercase tracking-normal">
            full resolution view
          </span>
        </div>
      </div>
    </Link>
  );
}
