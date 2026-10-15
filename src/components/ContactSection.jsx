import React, { useState } from 'react';
import { Phone, Instagram, MapPin, ArrowUpRight, Copy, Check, MessageCircle } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/galleryData';

export default function ContactSection() {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(STUDIO_CONFIG.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-espresso text-warm-white border-t border-sand/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs tracking-widest-editorial uppercase text-sand font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-warm-white tracking-tight leading-tight">
            {STUDIO_CONFIG.contact.heading}
          </h2>
          <p className="text-base sm:text-lg text-sand/85 font-light leading-relaxed font-sans max-w-2xl mx-auto">
            {STUDIO_CONFIG.contact.subheading}
          </p>
        </div>

        {/* 3 Prominent Editorial Direct Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Direct Call & WhatsApp */}
          <div className="group bg-espresso/70 border border-sand/30 p-8 rounded-sm flex flex-col justify-between space-y-6 hover:border-terracotta/70 transition-all duration-300 hover:shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-wider text-sand/80 font-medium">
                  <Phone size={14} className="text-terracotta" />
                  <span>Call & WhatsApp</span>
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="text-[11px] text-sand/75 hover:text-warm-white flex items-center space-x-1"
                  title="Copy phone number to clipboard"
                >
                  {copiedPhone ? <Check size={12} className="text-forest" /> : <Copy size={12} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <a
                  href={`tel:${STUDIO_CONFIG.contact.phoneRaw}`}
                  className="font-serif text-2xl sm:text-3xl text-warm-white hover:text-terracotta transition-colors block tracking-tight"
                >
                  {STUDIO_CONFIG.contact.phone}
                </a>
                <div className="text-xs uppercase tracking-widest text-forest font-semibold mt-1.5">
                  {STUDIO_CONFIG.contact.contactPerson}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-sand/20 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs">
              <a
                href={STUDIO_CONFIG.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-terracotta/90 hover:bg-forest text-warm-white px-4 py-2 rounded-sm transition-colors font-medium shadow-sm"
              >
                <MessageCircle size={13} />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight size={11} className="opacity-80" />
              </a>
              <a
                href={`tel:${STUDIO_CONFIG.contact.phoneRaw}`}
                className="inline-flex items-center space-x-1 text-sand hover:text-warm-white px-2 py-2 transition-colors"
              >
                <span>Direct Call</span>
              </a>
            </div>
          </div>

          {/* Card 2: Instagram */}
          <div className="group bg-espresso/70 border border-sand/30 p-8 rounded-sm flex flex-col justify-between space-y-6 hover:border-terracotta/70 transition-all duration-300 hover:shadow-2xl">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-wider text-sand/80 font-medium">
                <Instagram size={14} className="text-terracotta" />
                <span>Instagram Profile</span>
              </span>

              <div>
                <a
                  href={STUDIO_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-2xl sm:text-3xl text-warm-white hover:text-terracotta transition-colors block tracking-tight"
                >
                  {STUDIO_CONFIG.contact.instagramHandle}
                </a>
                <p className="text-xs text-sand/75 font-sans mt-1.5">
                  Reels, behind-the-scenes & daily stories
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-sand/20 flex items-center text-xs">
              <a
                href={STUDIO_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-sand/20 hover:bg-terracotta text-warm-white px-4 py-2 rounded-sm transition-colors font-medium border border-sand/30"
              >
                <span>View Instagram</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Card 3: Location / Commissions */}
          <div className="group bg-espresso/70 border border-sand/30 p-8 rounded-sm flex flex-col justify-between space-y-6 hover:border-terracotta/70 transition-all duration-300 hover:shadow-2xl">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-wider text-sand/80 font-medium">
                <MapPin size={14} className="text-terracotta" />
                <span>Commissions & Base</span>
              </span>

              <div>
                <div className="font-serif text-2xl sm:text-3xl text-warm-white tracking-tight">
                  India
                </div>
                <p className="text-xs text-sand/75 font-sans mt-1.5">
                  {STUDIO_CONFIG.contact.location}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-sand/20 text-xs text-sand/70 font-sans">
              <span>Based in Chennai · Available across all Indian states</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
