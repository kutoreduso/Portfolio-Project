import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./navbar";
import PosterSection from "./poster";
import HomeSection from "./home";

// Modern logic to handle scrolling to #about and #contact
function ScrollToSection() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToSection />
    
      <Routes>
        {/* Modern Route syntax */}
        <Route path="/" element={<HomeSection />} />
        <Route path="/poster" element={<PosterSection />} />
      </Routes>
    </Router>
  );
}

export default App;