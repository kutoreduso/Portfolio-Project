import Header from './header';
import Service from './service';
import About from './about';
import ProjectSection from './project';
import Contactsection from './contact';
const HomeSection = () => {

return(

<div className="bg-[#0A0A0A] scroll-smooth">
      <div className="bg-[#0A0A0A] scroll-smooth">
  <Header />
  <Service />
  <section id="about"><About /></section>
  <ProjectSection />
  <section id="contact"><Contactsection /></section>
</div>
</div>
  );
};


export default HomeSection