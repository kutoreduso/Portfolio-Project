
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const projects = [
  { title: "CCS Nexus", img: "/projects/ccsnexus.png", tech: "PHP • MySQL" },
  { title: "TaskFlow", img: "/projects/taskflow.png", tech: "PHP • MySQL" },
  { title: "KOI FISH (Color Grading)", img: "/img/Koi.png", tech: "Photoshop" },
  { title: "SCENT ATELIER (Work In Progress)", img: "/projects/scentology.png", tech: "React • Tailwind v4 • GSAP" },
];
const ProjectSection = () => {
const [activeImage, setActiveImage] = useState(projects[0].img);
  const container = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    // 1. Smooth Mouse Follower logic
    const xTo = gsap.quickTo(follower.current, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(follower.current, "y", { duration: 0.5, ease: "power3" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseEnter = (img) => {
    setActiveImage(img);
    gsap.to(follower.current, { scale: 1, opacity: 1, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(follower.current, { scale: 0, opacity: 0, duration: 0.3 });
  };
return(
    <>

    <div className="p-8">
      <h1 className="font-inter uppercase">- Project</h1>
    </div>
    <div className='p-8'>
      <h1 className="font-inter md:text-6xl text-justify text-[25px]">
         A showcase of ideas turned into reality—exploring design, code, and innovation through hands-on projects.
      </h1>
    </div>
    <section ref={container} className="relative py-20 bg-[#0a0a0a] text-white overflow-hidden">
      {/* The Floating Image */}
      <div 
        ref={follower} 
        className="pointer-events-none fixed top-0 left-0 w-80 aspect-video z-50 opacity-0 scale-0 overflow-hidden rounded-xl border border-zinc-700 shadow-2xl"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <img src={activeImage} className="w-full h-full object-cover" alt="Preview" />
      </div>

      {/* The Project List */}
      <div className="flex flex-col border-t border-zinc-800">
        {projects.map((project, i) => (
          <div 
            key={i}
            onMouseEnter={() => handleMouseEnter(project.img)}
            onMouseLeave={handleMouseLeave}
            className="group flex items-center justify-between p-10 border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors cursor-pointer"
          >
            <h2 className="md:text-6xl text-3xl font-bold uppercase tracking-tighter transition-all">
              {project.title}
            </h2>
            <p className="text-zinc-500 font-mono text-sm">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>



</>
)
}




export default ProjectSection