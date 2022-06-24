import React from 'react'; 
import './Card.css';
import {Card, Button} from "react-bootstrap";


function ProjectCard(props) {

let techList = props.tech.map((tech) => 
        <li>{tech}</li>
)

return (
    <Card
    bg={"light".toLowerCase()}
    key={"light"}
    text={'dark'}
    className="mb-2 cardHover">
    <Card.Body className='d-flex flex-column'>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className=" subtitleSpace mb-2 text-muted">{techList}</Card.Subtitle>
        <Card.Text className="textSpace">
        {props.description}
        </Card.Text>
        <div className="d-grid mt-auto gap-2 " >
            <Button href={props.link} className="buttonSpace" variant="info" size="lg">
                Learn More!
            </Button>
        </div>
    </Card.Body>
  </Card>
)
}


export default ProjectCard; 