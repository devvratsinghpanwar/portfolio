import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // Assuming you are using framer-motion

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Parallax,
} from "./components";
import Preloader from "./components/Preloader"; // Ensure you have this component

const App = () => {
  // Step 1: Add the loading state inside the component
  const [isLoading, setIsLoading] = useState(true);

  // Step 2: Add useEffect to handle the loading logic
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0); // Scroll to the top of the page after loading
    }, 2000); // 2-second delay for loading
  }, []);

  return (
    <BrowserRouter>
      {/* Step 3: Show Preloader while loading */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className="relative z-0 bg-primary">
        <Parallax />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <div className="bg-cover bg-no-repeat bg-center">
          <About />
        </div>
        <div className="bg-experience-pattern bg-cover bg-no-repeat bg-center">
          <Experience />
        </div>
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
