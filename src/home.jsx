import { useState, useEffect } from 'react';
import Header from './header';
import Service from './service';
import About from './about';
import ProjectSection from './project';
import Contactsection from './contact';
import Preloader from './loadup';

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
      <div className="min-h-screen bg-[#0A0A0A] selection:bg-white selection:text-black">
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* Main Content */}
      <div className={`relative ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}`}>
        <Header />
        <Service />
        <section id="about"><About /></section>
        <ProjectSection />
        <section id="contact"><Contactsection /></section>
      </div>
    </div>
    </>
  );
};

export default HomeSection;