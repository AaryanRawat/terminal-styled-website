import"./App.scss";
import Navbar from "./components/navbar/Navbar";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from "./components/about/About";

const App = () => {
  const [currentDisplay, setCurrentDisplay] = useState('about')

  return <div>
    <section>
      <Navbar />
      <div className="squareCorner">
        <div className="buttonMenu">
          <button onClick={()=> setCurrentDisplay("about")}>About</button>
          <button onClick={()=> setCurrentDisplay("projects")}>Projects</button>
          <button onClick={()=> setCurrentDisplay("experience")}>Experience</button>
          <button onClick={()=> setCurrentDisplay("links")}>Links</button>
        </div>
        <div className="displayDiv">
          <AnimatePresence mode="waits">
            {
              currentDisplay==="about" && (
                <motion.div
                  key="about"
                  initial={{opacity: 0, x: -50}}
                  animate={{opacity: 1, x: 0}}
                  exit={{opacity: 0, x: -50}}
                >
                  <About />
                </motion.div>
              )
            }
            {
              currentDisplay==="projects" && (
                <motion.div
                  key="projects"
                  initial={{opacity: 0, x: -50}}
                  animate={{opacity: 1, x: 0}}
                  exit={{opacity: 0, x: -50}}
                >
                  <h2>Projects</h2>
                </motion.div>
              )
            }
            {
              currentDisplay==="experience" && (
                <motion.div
                  key="experience"
                  initial={{opacity: 0, x: -50}}
                  animate={{opacity: 1, x: 0}}
                  exit={{opacity: 0, x: -50}}
                >
                  <h2>Experience</h2>
                </motion.div>
              )
            }
            {
              currentDisplay==="links" && (
                <motion.div
                  key="links"
                  initial={{opacity: 0, x: -50}}
                  animate={{opacity: 1, x: 0}}
                  exit={{opacity: 0, x: -50}}
                >
                  <h2>Links</h2>
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>
      </div>
    </section>
  </div>;
};

export default App;
