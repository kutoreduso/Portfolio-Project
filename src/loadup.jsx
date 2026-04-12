import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Preloader = ({ onComplete }) => {
  const container = useRef();
  const logoRef = useRef();
  const shutterRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete(),
    });

    // 1. Initial State: Hide posters off-screen to the left or just transparent
    gsap.set(".poster-card", { opacity: 0, x: -50, scale: 0.9 });
    gsap.set(logoRef.current, { opacity: 0, scale: 0.8 });

    tl.to(container.current, { duration: 0.2, opacity: 1 })
      
      // 2. Logo Reveal
      .to(logoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power4.out"
      })
      .to(logoRef.current, {
        opacity: 0,
        scale: 1.2,
        duration: 0.4,
        delay: 0.3,
        ease: "power2.in"
      })

      // 3. The "Flash & Slide" Card Sequence
      // We use a stagger to animate each card one after another
      .to(".poster-card", {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.3,
        stagger: {
          each: 0.15, // Time between each card appearing
          onStart: function() {
            // This makes the PREVIOUS card slide right when the NEW one starts
            const target = this.targets()[0];
            const prev = target.previousElementSibling;
            if (prev && prev.classList.contains('poster-card')) {
              gsap.to(prev, { x: 500, opacity: 0, duration: 0.4, ease: "power4.in" });
            }
          }
        },
        ease: "back.out(1.7)"
      })
      
      // Final card exit
      .to(".poster-card", {
        x: 600,
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        ease: "power4.in"
      })

      // 4. The Unveil
      // 4. The Unveil
tl.to(shutterRef.current, {
  yPercent: -100,
  duration: 1.2, // Slightly slower for a smoother feel
  ease: "expo.inOut",
  onComplete: () => {
    // This ensures onComplete ONLY fires once the shutter is gone
    onComplete();
  }
});

  }, { scope: container });

  // Helper to keep JSX clean
  const posters = [
    "/posters/acm.png",
    "/posters/OFF-WHITE.png",
    "/posters/Plague-Doctor.png",
    "/posters/Travis-Scott.png",
    "/posters/ts.png"
  ];

  return (
    <div ref={container} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">
      
      <div ref={shutterRef} className="absolute inset-0 bg-neutral-900 z-10" />

      {/* Logo */}
      <div ref={logoRef} className="relative z-20 w-32 h-32">
        <img src="/icon/icon.png" alt="Logo" className="w-full h-full object-contain invert" />
      </div>

      {/* Poster Cards Container */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        {posters.map((src, index) => (
          <div 
            key={index}
            className="poster-card absolute w-[300px] h-[400px] md:w-[400px] md:h-[550px] bg-neutral-800 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <img 
              src={src} 
              alt={`Poster ${index}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-10 left-10 z-20">
        <p className="text-white text-[10px] font-mono uppercase tracking-[0.3em] opacity-50">
          Synergy Loaded // {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Preloader;