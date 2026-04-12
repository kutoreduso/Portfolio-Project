import Navbar from "./navbar";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from "gsap/SplitText"
gsap.registerPlugin(SplitText)
const Header = () => {
  let split = SplitText.create(".hero-content",{
    type:"words"
  }) 
  
  gsap.from(split.words, {
    y:30,
    opacity:1,
    autoAlpha:0,
    stagger:0.1,
    scrub:true
  })

  let extitle = SplitText.create(".text-title", {
    type:"words"
  })

  gsap.from(extitle.words,{
    y:10,
    opacity:1,
    autoAlpha:0,
    stagger:0.1
  })

    return(
        <>
        <div>
            <Navbar/>

          {/* <div className="absolute inset-0 flex items-center justify-center">
  <img src="/img/Koi.png" className="object-cover md:w-230 md:h-115 md:mb-10 brightness-saturate-60 -contrast-50" />
</div> */}
        <div className="text-[#e9e9e9] font-bold p-8 md:text-8xl text-center md:mt-40 font-inter mt-10 text-[40px] hero-content">
            <h1 className="uppercase text-center">Welcome</h1>
            <h1 className="uppercase">Hello I'm Kurt</h1>
            <h1 className="uppercase">Hello I'm Kurt</h1>
            <h1 className="uppercase">Hello I'm Kurt</h1>
        </div>
</div>
<br className="md:mt-20"></br>
        <div className="p-8 flex justify-between">
            <h3 className="md:mt-40 uppercase font-light font-inter text-[#e9e9e9] mt-25 text-title">{new Date().getFullYear()} Based in Philippines</h3>
            <div className="mt-25 md:mt-29 text-title">
                <h3 className="uppercase font-light font-inter text-[#e9e9e9]">UI / UX Design</h3>
                <h3 className="uppercase font-light font-inter text-[#e9e9e9]">Front-End Developer </h3>
                <h3 className="uppercase font-light font-inter text-[#e9e9e9]">Graphics Designer</h3>
                
            </div>
        </div>
        <br className="mt-20"></br>
        </>
    );     
}
export default Header