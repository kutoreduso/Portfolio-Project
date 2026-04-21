import Navbar from "./navbar"

const Posterheader = () => {

    return(

        <>
        
      <div className="min-h-screen w-full bg-[#0A0A0A]">
 <Navbar/>
     <div className="mx-auto lg:w-250 lg:h-120 lg:mt-40 w-full aspect-1/1 justify-center shrink-0 overflow-hidden mt-5">
  <img 
    src="/img/Koi.png"
    alt=""
    className="w-full h-full object-cover brightness-50 saturate-50"
  />
</div>
          <div className="p-5 lg:flex-row justify-between lg:mt-20 flex-col-reverse flex mt-26">
              <h1 className="font-bold uppercase font-inter text-6xl lg:text-8xl">Galleria</h1>
               <div className="text-title lg:text-right">
                        <h3 className="uppercase font-light font-inter text-[#e9e9e9]">UI / UX Design</h3>
                        <h3 className="uppercase font-light font-inter text-[#e9e9e9]">Front-End Developer</h3>
                        <h3 className="uppercase font-light font-inter text-[#e9e9e9]">Graphics Designer</h3>
                    </div>
          </div>
        </div>
    </>
    
    )


}

export default Posterheader