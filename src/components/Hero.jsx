import { motion } from "framer-motion";
import { styles } from "../styles";
import Magnetic from "../common/Magnetic";
import { useState, useEffect } from "react";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  {
    /*const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Limit the scroll position to be within the hero section
      if (scrollY <= heroHeight) {
        setScrollPos(scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);*/
  }

  // Calculate the horizontal movement (this will stay within the viewport)
  //const translateX = Math.min(scrollPos * 2, window.innerWidth - 100); // Max to prevent overflow

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <Magnetic>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#385170]" />
          <div className="w-1 sm:h-80 h-40 grey-gradient" />
        </div>
        </Magnetic>
        <div>
          <Magnetic>
            <h1 className={`${styles.heroHeadText}`}>
              Hi I'm <span> Devvrat</span>
            </h1>
          </Magnetic>
          <p className={`${styles.heroSubText} mt-2`}>
            I am an avid developer, ML enthusiast,{" "}
            <br className="sm:block hidden" />
            Competitive Programmer and
            <br className="sm:block hidden" /> ever learning Devops Engineer{" "}
            <br />
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 25, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
