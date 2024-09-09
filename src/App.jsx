// import React from 'react'

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
   <>
   <div className="bg-black h-[100vh]">
   <Navbar />
   <Hero />
   </div>
   <Projects />
   <About />
   <Contact />
   </>
  )
}

export default App;