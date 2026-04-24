import { useState, useEffect } from 'react';
import Header from './header';
import Service from './service';
import About from './about';
import PosterSection from './poster';
import Contactsection from './contact';
import Preloader from './loadup';
import ProjectSection from './project';

const HomeSection = () => {
  // Use lowercase 'setIsLoading' to follow React conventions
  const [isLoading, setIsLoading] = useState(true);

  // Optional: Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <>
      {/* 1. The Preloader Layer */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* 2. The Main Content Layer */}
      {/* We use 'relative' and 'z-index' to ensure the content stays below the loader */}
      <div className={`min-h-screen bg-[#0A0A0A] ${isLoading ? 'overflow-hidden' : ''}`}>
      
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* Using 'flex flex-col' ensures child sections stack correctly.
          We use opacity-0 to hide content until the preloader finishes.
      */}
      <main className={`relative transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <Service />
        <section id="about"><About /></section>
        <ProjectSection />
        <section id="contact"><Contactsection /></section>
      </main>
    </div>
    </>
  );
};

export default HomeSection;