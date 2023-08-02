import React from 'react';
import "./WorkExperiences.css";
import WorkCard from './WorkCard';


class jobExperience {
    constructor(title, description, company,dateRange, techUsed){
        this.title = title;
        this.description = description;
        this.company = company;
        this.dateRange = dateRange;
        this.techUsed = techUsed;
    }
}

let SSI = new jobExperience("Software Developer",["Wrote and tested high quality Java code to fix bugs or perform change requests for the customer’s logistics application","Deployed new product versions to testing environments and production", "Developed a testing tool that is used to run various functional testing on customer’s logistic application to quickly test new changes or find new issues","Participated and offered support for customer’s onsite warehouse issues regarding work stoppages caused by the software logistic application"], "SSI Schaefer","July 2022 - Present",["Java, MySQL, XML, Gerrit, BDeploy, VirtualBox, Jira"]); 
let MGCS = new jobExperience("I&IT Developer (Internship)",["Tested and provided feedback on a critical Service Ontario project", "Worked regularly with clients to recreate a crucial internal application using modern technologies", "Created multiple components and updated the web application user interface using Angular"], "Ministry of Ontario Government Services Integration Cluster","September 2021 - December 2021",["HTML5", "Angular", "JavaScript", "CSS", "SQL", "Bitbucket"]); 
let Ryerson = new jobExperience("Technical Support Assistant (Internship)",["Worked and helped students, with logical and coding support","Controlled the computer science department’s social media pages, making weekly postings", "Conducted a Java workshop for over 80 people, teaching Java and building an interactive game"], "Ryerson University","January 2021 - April 2021",["Java","SQL","Python"]); 
let SSNC = new jobExperience("Product Engineer (Internship)",["Transitioned companywide projects to Maven projects, analyzed project JAR files, aided in the creation, and editing of project POM files","Created documentations for transitioning multiple projects to Maven","Tested functionality of projects based on changes to Maven builds and created Bash scripts for testing"], "SS&C Technologies","May 2020 - August 2020",["HTML", "CSS","Tomcat","XML","Bitbucket","Excel"]); 


function WorkExperiences() {

    return (
        <div id="workExperiencesTile" className="websiteBackground">
            <h1 className="experienceTitle">Work Experiences</h1>
            <div className="flex">
            <WorkCard title={SSI.title} description={SSI.description} company={SSI.company} dateRange={SSI.dateRange} techUsed={SSI.techUsed} />
            <WorkCard title={MGCS.title} description={MGCS.description} company={MGCS.company} dateRange={MGCS.dateRange} techUsed={MGCS.techUsed} />
            <WorkCard title={Ryerson.title} description={Ryerson.description} company={Ryerson.company} dateRange={Ryerson.dateRange} techUsed={Ryerson.techUsed} />
            <WorkCard title={SSNC.title} description={SSNC.description} company={SSNC.company} dateRange={SSNC.dateRange} techUsed={SSNC.techUsed} />
            </div>
        </div>
    );
}

export default WorkExperiences;