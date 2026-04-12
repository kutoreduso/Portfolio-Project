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
  <ul className="md:flex-row flex-col flex gap-5 font-inter text-[#E5E5E5] font-bold">
    {/* Galleria Link - Works fine */}
    <Link to="/poster">
      <li className="md:w-25 rounded-2xl  text-center  text-[#e9e9e9]  uppercase ">
        Galleria
      </li>
    </Link>

    {/* ABOUT Link - Fixed to use hash if About is a section on the Home page */}
    <Link to="/#about">
  <li className="md:w-25 rounded-2xl  text-center  text-[#e9e9e9] uppercase ">
    ABOUT
  </li>
</Link>

<Link to="/#contact">
  <li className="w-30 rounded-2xl  text-center  text-[#e9e9e9]  uppercase">
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