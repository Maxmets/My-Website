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
  // 1. Center better for certain mobile devices
  

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
