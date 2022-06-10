import React from 'react'; 
import ProjectCard from "../card/Card.js";
import "./Projects.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Project {
    constructor(title,description,link,image,techUsed){
      this.title = title; 
      this.description = description;
      this.link = link; 
      this.image = image; 
      this.techUsed = techUsed;
    }
  }
  
  let project1 = new Project("Travel Website", "Interactive website that displayed different predefined countries around the world. The user than was able to select a country of interest and see possible places that they can tour in that country. The website was build on technologies such as: HTML, CSS, JavaScript, and PHP. The website pulled data from a SQL Database.","https://github.com/Maxmets/Tourism-Store","image",["PHP","JavaScript","HTML","CSS", "Oracle SQL"]);
  let project2 = new Project("Smart Contract Simulation", "Created a JavaScript application that used Solidity, MetaMask, and a local blockchain from Ganache to simulate a smart contract transaction. The application used ethereum as payment for every end result calculation performed. After the payment transaction succeeded the transaction details were reflected on the local blockchain. ","https://github.com/Maxmets/Smart-Contract-Simulator","image",["JavaScript","Solidity","Ganache","HTML","CSS"]);
  let project3 = new Project("Unions & Intersections of Intervals", "A time complexity project that gets unions and intersections of a large array of numerical intervals using a suitable data structure technique. The project was used as an educational tool to encourage the exploration of different possible data structures to find the optimal solution that printed the desired result in the shortest amount of time.","http://google.com","image",["Java","Data Structures"]);

function Projects() {

    return (
      <div id="projectsTile" className="websiteBackground">
        <h1 className="projectTitle">Projects</h1>
        <div className="proj">
        <ProjectCard title={project1.title} description={project1.description} link={project1.link} tech={project1.techUsed}> </ProjectCard>
        <ProjectCard title={project2.title} description={project2.description} link={project2.link} tech={project2.techUsed}> </ProjectCard>
        <ProjectCard title={project3.title} description={project3.description} link={project3.link} tech={project3.techUsed}> </ProjectCard>
        </div>
      </div>
    );

}


export default Projects;