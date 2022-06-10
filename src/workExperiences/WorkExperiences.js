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

let MGCS = new jobExperience("I&IT Developer (Internship)",["Tested and provided feedback on a critical Service Ontario project", "Worked regularly with clients to recreate a crucial internal application using modern technologies", "Created multiple components and updated the web application user interface using Angular"], "Ministry of Ontario Government Services Integration Cluster","September 2021 - December 2021",["HTML5", "Angular", "JavaScript", "CSS", "SQL", "Bitbucket"]); 
let Ryerson = new jobExperience("Technical Support Assistant (Internship)",["Worked and helped students, with logical and coding support","Controlled the computer science department’s social media pages, making weekly postings", "Conducted a Java workshop for over 80 people, teaching Java and building an interactive game"], "Ryerson University","January 2021 - April 2021",["Java","SQL","Python"]); 
let SSNC = new jobExperience("Product Engineer (Internship)",["Transitioned companywide projects to Maven projects, analyzed project JAR files, aided in the creation, and editing of project POM files","Created documentations for transitioning multiple projects to Maven","Tested functionality of projects based on changes to Maven builds and created Bash scripts for testing"], "SS&C Technologies","May 2020 - August 2020",["HTML", "CSS","Tomcat","XML","Bitbucket","Excel"]); 
let IFDS = new jobExperience("Desktop Support Analyst (Internship)",["Provided professional technical solutions to issues ranging from troubleshooting and installing software to providing new hardware","Helped in maintaining and organizing the company’s hardware storage, inventory rooms and set up training rooms", "Worked on a company-wide virtual desktop performance benchmark project by running tests and gathering results"], "International Financial Data Services","May 2019 - August 2019",["ServiceNow","Microsoft Office",]); 

function WorkExperiences() {

    return (
        <div id="workExperiencesTile" className="websiteBackground">
            <h1 className="experienceTitle">Work Experiences</h1>
            <div className="flex">
            <WorkCard title={MGCS.title} description={MGCS.description} company={MGCS.company} dateRange={MGCS.dateRange} techUsed={MGCS.techUsed} />
            <WorkCard title={Ryerson.title} description={Ryerson.description} company={Ryerson.company} dateRange={Ryerson.dateRange} techUsed={Ryerson.techUsed} />
            <WorkCard title={SSNC.title} description={SSNC.description} company={SSNC.company} dateRange={SSNC.dateRange} techUsed={SSNC.techUsed} />
            <WorkCard title={IFDS.title} description={IFDS.description} company={IFDS.company} dateRange={IFDS.dateRange} techUsed={IFDS.techUsed} />
            </div>
        </div>
    );
}

export default WorkExperiences;