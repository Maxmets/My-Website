import React from 'react';
import myImage from "../IMG_3728.jpg"; 
import './AboutMe.css'

function AboutMe(){
    return(
      <div id="aboutMeTile" className="aboutMe websiteBackground">
        <h1 className="aboutMeTitle">About Me</h1>
        <div class="aboutMeContent">
          <img className='myImage' src={myImage} alt="Maksym Yakhymets"/>
          <p>Motivated and hardworking software developer; With over a year of professional experience in software development, 
            which included technical and comprehensive knowledge across all aspects of computer programing, software tools, 
            and concepts. Who comes with a passion for continuous learning and professional development; seeking a new opportunity 
            within an organization to contribute my skills effectively to a team, achieving mandated goals, and seamless end-to-end 
            productivity at all times.</p>
          </div>
      </div>
    );

}

export default AboutMe;