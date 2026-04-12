import React, {useRef} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from "gsap/SplitText"
import Navbar from './navbar'

gsap.registerPlugin(SplitText)
const PosterSection = () => {

  let split = SplitText.create(".text-split",{
    type:"words"
  }) 
  
  gsap.from(split.words, {
    y:30,
    opacity:1,
    autoAlpha:0,
    stagger:0.1
  })
  return (
    <>
     

      <div className="min-h-screen w-full bg-[#0A0A0A]">
 <Navbar/>x


        <div className="text-center text-split" >
         <h1 className="text-[#e5e5e5]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sed. awdawdawdw</h1> 
        </div>
        </div>
    </>
    
  );
};

export default PosterSection; // <--- Make sure this line exists!