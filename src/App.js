import './App.css';
import Projects from '../src/projects/Projects.js';
import Header from '../src/header/Header.js';
import AboutMe from "../src/aboutMe/AboutMe.js";
import Socials from "../src/socials/Socials.js";
import Footer from "../src/footer/Footer.js"
import WorkExperiences from '../src/workExperiences/WorkExperiences.js';
import React from 'react';

function App() {

  // TODO:
  // 1. Upload Unions and Intervals Project to GitHub 
  // 2. Change the Socials Tiles 
  // 3. Sizing for mobile and middle screens 
  // 4. Fix the Button on the last Project Card


  return (
      <div>
        <Header/>
        <AboutMe/>
        <WorkExperiences/>
        <Projects/>
        <Socials/>
        <Footer/>
      </div>
  );
}

export default App;
