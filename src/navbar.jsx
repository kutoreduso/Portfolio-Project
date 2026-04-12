import PosterSection from './poster';
import About from './about';
import { Link } from 'react-router-dom'
const Navbar = () => {

    return(

<>
        
        <div className="p-5 flex flex-row justify-between bg-transparent font-inter">
            <Link to="/">
            <h1 className="font-bold  text-[#E5E5E5] md:w-20  text-center">
                Kurt.
            </h1>
            </Link>
               <nav className="font-inter">
  <ul className="md:flex-row flex-col flex gap-5 font-normal font-inter text-[#E5E5E5]">
    {/* Galleria Link - Works fine */}
    <Link to="/poster">
      <li className="md:w-25 rounded-2xl border-2 border-[#e5e5e5] text-center bg-[#e5e5e5] text-[#0A0A0A] hover:bg-[#0A0a0a] uppercase hover:text-[#e5e5e5] duration-300">
        Galleria
      </li>
    </Link>

    {/* ABOUT Link - Fixed to use hash if About is a section on the Home page */}
    <Link to="/#about">
  <li className="md:w-25 rounded-2xl border-2 border-[#e5e5e5] text-center bg-[#e5e5e5] text-[#0A0A0A] hover:bg-[#0A0a0a] hover:text-[#e5e5e5] duration-300">
    ABOUT
  </li>
</Link>

<Link to="/#contact">
  <li className="w-30 rounded-2xl border-2 border-[#e5e5e5] text-center bg-[#e5e5e5] text-[#0A0A0A] hover:bg-[#0A0a0a] hover:text-[#e5e5e5] duration-300">
    CONTACT
  </li>
</Link>
  </ul>
</nav>
            </div>
        
</>
    );
}

export default Navbar