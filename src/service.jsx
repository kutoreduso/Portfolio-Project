import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from 'gsap'
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)
 
const Service = () => {
    useEffect(() => {
  const ctx = gsap.context(() => {
    const split = new SplitText(".show-service", {
      type: "lines",
      linesClass: "line",
      tag:"span",
    });

    split.lines.forEach(line => {
      const wrapper = document.createElement("div");
      wrapper.className = "overflow-hidden"; // Tailwind style
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    gsap.from(split.lines, {
      scrollTrigger: {
        trigger: ".sh0w-service",
        start: "top",
      },
      y: 60,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
    });
  });

  return () => ctx.revert();
}, []);



    return(
        <>
        
            <div className="p-8">
                <div>
                    <h1 className="uppercase font-inter text-[#e9e9e9]">- Services</h1>
                </div>
                <br className="md:mt-20"></br>
                <div className="md:mt-15 mt-8  overflow-hidden">
                    <h1 className="uppercase font-inter text-[#e9e9e9] show-service font-bold md:text-6xl text-5xl ">UI / UX Designer</h1>
                    <h3 className="font-inter text-[#e9e9e9] mt-5 show-service md:mt-10 md:w-200 text-justify">Focusing on mobile-first, responsive interfaces that adapt to any screen size. I specialize in mapping out user journeys and creating high-fidelity prototypes that solve real-world problems through intuitive navigation.</h3>
                    <div className="flex flex-wrap gap-2 mt-4  ">
                        <span className="px-3 py-1 text-[18px] border border-[#e9e9e9] rounded-full text-[#e9e9e9] show-service">Responsive Design</span>
                        <span className="px-3 py-1 text-[18px] border border-[#e9e9e9] rounded-full text-[#e9e9e9] show-service">User Research</span>
                        <span className="px-3 py-1 text-[18px] border border-[#e9e9e9] rounded-full text-[#e9e9e9] show-service">Interactive Prototyping</span>
                        <span className="px-3 py-1 text-[18px] border border-[#e9e9e9] rounded-full text-[#e9e9e9] show-service">Wireframing</span>
                    </div>
                </div>
                <div className="md:mt-20 mt-5">
                    <h1 className="uppercase font-inter text-[#e9e9e9] md:text-6xl font-bold text-5xl show-service">FRONT-END DEVELOPER</h1>
                    <p className="font-inter text-[#e9e9e9] md:mt-10 mt-5 md:w-200 text-justify show-service">Bringing designs to life using clean, efficient code. I specialize in building fast, responsive, and interactive web applications using modern technologies like React and Tailwind CSS to ensure a seamless experience across all devices.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 text-[18px] border border-[#e9e9e9] rounded-full text-[#e9e9e9] show-service">Tailwind CSS</span>
                        <span className="px-3 py-1 text-[18px] border border-[#e9e9e9] rounded-full text-[#e9e9e9] show-service">Responsive Development</span>
                    </div>
                <div className="md:mt-20 mt-5">
                    <h1 className="uppercase font-inter text-[#e9e9e9] md:text-6xl font-bold text-5xl show-service">Graphics Designer</h1>
                    <p className="font-inter text-[#e9e9e9] mt-5 md:mt-10 md:w-200 text-justify show-service">Crafting compelling visual identities and brand assets. From high-impact typography to sophisticated color palettes, I create layouts that capture attention and communicate a brand's message effectively across digital and print media.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 text-[18px] border border-[#e9e9e9] rounded-full text-[#e9e9e9] show-service">Brand Identity</span>
                        <span className="px-3 py-1 text-[18px] border border-[#e9e9e9] rounded-full text-[#e9e9e9] show-service">Typography</span>
                        <span className="px-3 py-1 text-[18px] border border-[#e9e9e9] rounded-full text-[#e9e9e9] show-service">Visual Composition</span>
                    </div>

            </div>
<br className="md:mt-20"></br>
            
        
        </>
    );

}

export default Service