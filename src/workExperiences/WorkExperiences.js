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

let MGCS = new jobExperience("IT Developer (Internship)","Worked as a worker in angular", "Ministry of Ontario Integration Cluster","September 2021 - December 2021",["Angular","Javascript","Oracle SQL", "HTML", "CSS"]); 
let Ryerson = new jobExperience("Technical Assistant (Internship)","Worked as a worker in angular", "Ministry of Ontario Integration Cluster","September 2021 - December 2021",["Angular","Javascript","Oracle SQL", "HTML", "CSS"]); 
let SSNC = new jobExperience("Product Engineer (Internship)","Worked as a worker in angular", "Ministry of Ontario Integration Cluster","September 2021 - December 2021",["Angular","Javascript","Oracle SQL", "HTML", "CSS"]); 
let IFDS = new jobExperience("Desktop Support Analyst (Internship)","Worked as a worker in angular", "Ministry of Ontario Integration Cluster","September 2021 - December 2021",["Angular","Javascript","Oracle SQL", "HTML", "CSS"]); 

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