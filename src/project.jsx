

const ProjectSection = () => {

return(
    <>
    <br className="md:mt-20"></br>
        <div className="">
            <h1 className="p-8 uppercase text-[#e5e5e5] font-inter">- Selected Work</h1>
<br className="md:mt-20"></br>
      {/* Cards */}
       <div className="flex flex-col w-full">
  {/* Added flex-1 to children to ensure 50/50 split */}
  <div className="w-full group flex flex-col md:flex-row bg-[#1a1a1a] overflow-hidden min-h-[500px] border border-gray-900">
    
    {/* LEFT SIDE: Image */}
    <div className="md:w-1/2 w-full aspect-square overflow-hidden">
      <img 
        src="/public/projects/ccsnexus.png"
        alt="CCS Nexus"
        className="w-full h-full object-cover group-hover:scale-105 duration-700"
      />
    </div>

    {/* RIGHT SIDE: Content */}
    <div className="md:w-1/2 w-full flex flex-col justify-center p-8 md:p-16">
      {/* Date & Title */}
      <span className="text-[#e9e9e9] font-inter text-xs tracking-widest uppercase mb-2">Capas, Tarlac 2024 - 2025</span>
      <h1 className="text-[#e9e9e9] font-inter font-bold text-4xl md:text-6xl leading-tight">
        CCS Nexus
      </h1>
      
      <p className="text-gray-400 font-inter mt-4 text-sm md:text-base leading-relaxed">
        Centralized platform designed to modernize academic assessments by replacing traditional paper-based workflows. It streamlines the grading process through a secure, web-based interface, ensuring data accuracy and faster evaluation for capstone projects.
      </p>

      {/* Features List */}
      <ul className="text-[#e9e9e9] font-inter mt-8 space-y-4 text-sm md:text-lg">
        <li className="flex items-start gap-3">
          <span className="text-gray-600">•</span>
          <span>Introduced a centralized Web-based Grading platform.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-gray-600">•</span>
          <span>Improved evaluation efficiency for 3rd & 4th year proponents.</span>
        </li>
      </ul>

      {/* Tech Stack - My addition to show your Developer side */}
      <div className="flex gap-3 mt-10">
        <span className="text-[10px] px-3 py-1 border border-gray-800 rounded-full text-gray-500 font-bold tracking-tighter">BOOTSTRAP</span>
        <span className="text-[10px] px-3 py-1 border border-gray-800 rounded-full text-gray-500 font-bold tracking-tighter">PHP / SQL</span>
      </div>

      {/* Animated Action Link */}
      <div className="mt-12">
        <a href="https://ccsnexus.site/login" className="relative text-[#e9e9e9] group/link w-fit text-sm font-bold tracking-widest uppercase">
          View Project
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#e9e9e9] transition-all duration-300 group-hover/link:w-full"></span>
        </a>
      </div>
    </div>
  </div>
</div>

<br></br>
{/* Next Project */}
<div className="flex flex-col w-full">
  {/* Added flex-1 to children to ensure 50/50 split */}
  <div className="w-full group flex flex-col md:flex-row bg-[#1a1a1a] overflow-hidden min-h-[500px] border border-gray-900">
    
    {/* LEFT SIDE: Image */}
    <div className="md:w-1/2 w-full aspect-square overflow-hidden">
      <img 
        src="/projects/taskflow.png"
        alt="Taskflow"
        className="w-full h-full object-cover group-hover:scale-105 duration-700"
      />
    </div>

    {/* RIGHT SIDE: Content */}
    <div className="md:w-1/2 w-full flex flex-col justify-center p-8 md:p-16">
      {/* Date & Title */}
      <span className="text-[#e9e9e9] font-inter text-xs tracking-widest uppercase mb-2">Concepcion, Tarlac - 2026</span>
      <h1 className="text-[#e9e9e9] font-inter font-bold text-4xl md:text-6xl leading-tight">
        Taskflow
      </h1>
      
      <p className="text-gray-400 font-inter mt-4 text-sm md:text-base leading-relaxed md:w-150 text-justify">
       Centralized management system designed to streamline the distribution of responsibilities and track project progress in real-time. It eliminates workflow bottlenecks by bridging the gap between team delegation and operational transparency within a local network environment.
      </p>

      {/* Features List */}
      <ul className="text-[#e9e9e9] font-inter mt-8 space-y-4 text-sm md:text-lg">
        <li className="flex items-start gap-3">
          <span className="text-gray-600">•</span>
          <span>Initilized a efficiency Task Management System through Online</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-gray-600">•</span>
          <span>Improved the destribution of task with mix of Traditional and Digital</span>
        </li>
      </ul>

      {/* Tech Stack - My addition to show your Developer side */}
      <div className="flex gap-3 mt-10">
  <span className="text-[10px] px-3 py-1 border border-gray-800 rounded-full text-gray-500 font-bold tracking-tighter">BOOTSTRAP</span>
        <span className="text-[10px] px-3 py-1 border border-gray-800 rounded-full text-gray-500 font-bold tracking-tighter">PHP / SQL</span>
      </div>

      {/* Animated Action Link */}
      <div className="mt-12">
        <a href="https://taskflow.infinityfree.me/" className="relative text-[#e9e9e9] group/link w-fit text-sm font-bold tracking-widest uppercase">
          View Project
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#e9e9e9] transition-all duration-300 group-hover/link:w-full"></span>
        </a>
      </div>
    </div>
  </div>
</div>
        
  </div>
  
</>
)
}




export default ProjectSection