import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-white font-[Orbitron]">

      {/* GLOBAL BACKGROUND IMAGE */}
      <div className="fixed inset-0 -z-10">
        <img
          src={process.env.PUBLIC_URL + "/images/background-image.jpg"}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <Navbar />

      {/* INTRO (keep as-is if already transparent) */}
      <Introduction />

      {/* APPLY OVERLAY TO ALL SECTIONS */}
      <div className="bg-[#0a0f2e]/70 backdrop-blur-sm">
        <AboutMe />
      </div>

      <div className="bg-[#0a0f2e]/70 backdrop-blur-sm">
        <Education />
      </div>

      <div className="bg-[#0a0f2e]/70 backdrop-blur-sm">
        <Experience />
      </div>

      <div className="bg-[#0a0f2e]/70 backdrop-blur-sm">
        <Skills />
      </div>

      <div className="bg-[#0a0f2e]/70 backdrop-blur-sm">
        <Projects />
      </div>

      {/* CONTACT (NO OVERLAY) */}
      <Contact />

    </div>
  );
}

export default App;
