import Navbar from "./navbar";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Header = () => {
    const mainContainer = useRef();

    useGSAP(() => {
        // 1. Initialize SplitText
        const heroSplit = new SplitText(".hero-content h1", { type: "words,chars" });
        const detailsSplit = new SplitText(".text-title", { type: "words" });

        // 2. Setup the Timeline with ScrollTrigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainContainer.current,
                start: "top top",
                end: "+=150%", // How long it stays pinned (150% of screen height)
                pin: true,      // "Sticks" the header to the top
                scrub: 1,       // Smoothly ties animation to scroll progress
                anticipatePin: 1,
            }
        });

        // 3. The Animation Sequence
        tl.from(heroSplit.words, {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out"
        })
        .from(detailsSplit.words, {
            y: 20,
            opacity: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.5"); // Starts slightly before the hero text finishes

    }, { scope: mainContainer });

    return (
        <div ref={mainContainer} className="overflow-hidden bg-[#0a0a0a]">
            {/* Wrapper to ensure content takes full screen during pin */}
            <div className="min-h-screen flex flex-col justify-between">
                <Navbar />

                <div className="text-[#e9e9e9] font-bold p-8 md:text-8xl text-center md:mt-20 font-inter mt-10 text-[40px] hero-content">
                    <h1 className="uppercase">Welcome</h1>
                    <h1 className="uppercase">Hello I'm Kurt</h1>
                    <h1 className="uppercase opacity-50">Hello I'm Kurt</h1>
                    <h1 className="uppercase opacity-20">Hello I'm Kurt</h1>
                </div>

                <div className="p-8 flex justify-between items-end pb-20">
                    <h3 className="uppercase font-light font-inter text-[#e9e9e9] text-title">
                        {new Date().getFullYear()} Based in Philippines
                    </h3>
                    <div className="text-title text-right">
                        <h3 className="uppercase font-light font-inter text-[#e9e9e9]">UI / UX Design</h3>
                        <h3 className="uppercase font-light font-inter text-[#e9e9e9]">Front-End Developer</h3>
                        <h3 className="uppercase font-light font-inter text-[#e9e9e9]">Graphics Designer</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;