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
  
  let project1 = new Project("Test3", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","http://google.com","image",["PHP","HTML","CSS"]);
  let project2 = new Project("Test3", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","http://google.com","image",["PHP","HTML","CSS"]);
  let project3 = new Project("Test3", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","http://google.com","image",["PHP","HTML","CSS"]);
  let project4 = new Project("Test3", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","http://google.com","image",["PHP","HTML","CSS"]);


function Projects() {

    return (
      <div id="projectsTile" className="websiteBackground">
        <h1 className="projectTitle">Projects</h1>
        <div className="proj">
        <ProjectCard title={project1.title} description={project1.description} link={project1.link} tech={project1.techUsed}> </ProjectCard>
        <ProjectCard title={project2.title} description={project2.description} link={project2.link} tech={project2.techUsed}> </ProjectCard>
        <ProjectCard title={project3.title} description={project3.description} link={project3.link} tech={project3.techUsed}> </ProjectCard>
        <ProjectCard title={project4.title} description={project4.description} link={project4.link} tech={project4.techUsed}> </ProjectCard>
        </div>
      </div>
    );

}


export default Projects;