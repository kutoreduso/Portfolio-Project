

const About = () => {

    return(
            <>
            <div id="about">
              
    <h1 className="uppercase p-8 font-inter text-[#e9e9e9]">- About</h1>
  </div>
            <div className="max-w-screen-2xl mx-auto md:mt-15 mt-8 p-8">
  

  {/* Main Container */}
  <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-between md:mt-15 mt-10 gap-16">
    
    {/* IMAGE: Fixed at 1000px on desktop */}
    <div className="w-full md:w-[800px]">
      <img 
        src="/img/profile.jpg"
        className="
          rounded-3xl object-cover 
          /* Mobile */
          w-full h-auto
          /* Desktop: Exactly 1000px wide */
          md:w-[800px] md:h-auto 
          shadow-2xl
        "
        alt="Kurt Profile"
      />
    </div>

    {/* TEXT CONTENT */}
    <div className="text-[#e9e9e9] font-inter md:pr-10">
      <h1 className="md:text-8xl font-bold uppercase text-4xl leading-tight">
        Hello I'm <br /> Kurt
      </h1>
      
      <p className="w-full md:max-w-lg text-justify mt-8 md:text-[20px] leading-relaxed opacity-90">
        I am a designer bridging the gap between Graphic Design aesthetics and functional UI/UX. 
        With a foundation in visual storytelling, I transform complex problems into intuitive, 
        scalable digital systems. My focus is on creating cohesive user journeys that are both 
        organized and purposefully built for the end-user.
      </p>

      {/* Badges */}
      <div className="mt-12 flex flex-wrap gap-4">
        {/* Figma Badge */}
        <div className="flex items-center gap-3 px-4 py-2 border border-[#e9e9e9] rounded-full bg-[#0F0F0F]">
          <img src="/icon/figma.png" alt="Figma" className="w-5 h-5 grayscale brightness-200" />
          <span className="text-xs font-semibold tracking-widest text-[#e9e9e9]">FIGMA</span>
        </div>
         <div className="flex items-center gap-3 px-4 py-2 border border-[#e9e9e9] rounded-full bg-[#0F0F0F]">
          <img src="/icon/photoshop.png" alt="Figma" className="w-5 h-5 grayscale brightness-200" />
          <span className="text-xs font-semibold tracking-widest text-[#e9e9e9]">PHOTOSHOP</span>
        </div>
         <div className="flex items-center gap-3 px-4 py-2 border border-[#e9e9e9] rounded-full bg-[#0F0F0F]">
          <img src="/icon/react.png" alt="Figma" className="w-5 h-5 grayscale brightness-200" />
          <span className="text-xs font-semibold tracking-widest text-[#e9e9e9]">REACT</span>
        </div>
         <div className="flex items-center gap-3 px-4 py-2 border border-[#e9e9e9] rounded-full bg-[#0F0F0F]">
          <img src="/icon/tailwind.png" alt="Figma" className="w-5 h-5 grayscale brightness-200" />
          <span className="text-xs font-semibold tracking-widest text-[#e9e9e9]">TAILWIND</span>
        </div>
         <div className="flex items-center gap-3 px-4 py-2 border border-[#e9e9e9] rounded-full bg-[#0F0F0F]">
          <img src="/icon/github.png" alt="Figma" className="w-5 h-5 grayscale brightness-200" />
          <span className="text-xs font-semibold tracking-widest text-[#e9e9e9]">GITHUB</span>
        </div>
        {/* ... rest of your badges ... */}
      </div>
    </div>
    
  </div>
</div>
            </>
    );
}
export default About;