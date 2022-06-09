import React from 'react';
import "./WorkCard.css";
import {Card} from "react-bootstrap";

function WorkCard(props) {

    let list = props.techUsed.map((item) => 
        <li>{item}</li>
    );
    
    return(
    <Card
    bg={"light".toLowerCase()}
    key={"light"}
    text={"light".toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '26rem', height: "max-content" }}
    className="mb-2"
  >
    <Card.Header>{props.company}</Card.Header>
    <Card.Body>
      <Card.Title>{props.title} </Card.Title>
      <Card.Text>
          <b>Technology Used:</b>
              {list}
      </Card.Text>
      <Card.Text>
        {props.description}
      </Card.Text>
      <Card.Text>
         <b>Duration:</b> {props.dateRange}
      </Card.Text>
    </Card.Body>
  </Card>
        
    );
}


export default WorkCard;