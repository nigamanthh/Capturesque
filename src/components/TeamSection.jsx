import React from 'react';
import { TEAM_MEMBERS } from '../data/galleryData';

export default function TeamSection() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-36 bg-warm-white border-b border-sand/40 text-espresso">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-24 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs tracking-widest-editorial uppercase text-forest font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            <span>The Team Behind Capturesque</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso font-light tracking-tight leading-tight">
            Three perspectives. One frame at a time.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-espresso/80 font-light leading-relaxed font-sans">
            We are Nigamanth, Dharani, and Fazil. While each of us brings a distinctive aesthetic sensibility — from raw cinematic motion to quiet candid glances and bold concert lighting — we operate as a unified creative team behind CAPTURESQUE.
          </p>
        </div>

        {/* 3 Profile Cards (Name and Photograph) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.id}
              className="group flex flex-col bg-parchment/60 border border-sand/50 p-5 sm:p-7 rounded-sm transition-all duration-500 hover:shadow-xl hover:border-forest/50"
            >
              {/* Portrait Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-espresso/10 mb-4 sm:mb-5 border border-sand/40 rounded-sm">
                <img
                  src={member.image}
                  alt={member.imageAlt || `Portrait of ${member.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-105"
                />

                {/* Subtle vignette on portrait */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
              </div>

              {/* Name */}
              <div className="flex items-center justify-between pt-1">
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-normal group-hover:text-terracotta transition-colors">
                  {member.name}
                </h3>
                <span className="text-xs font-mono text-forest">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
