import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import WorkGrid from '../components/WorkGrid';
import ReelsSection from '../components/ReelsSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <WorkGrid />
      <ReelsSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
