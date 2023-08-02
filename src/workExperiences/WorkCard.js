import React from 'react';
import "./WorkCard.css";
import {Card} from "react-bootstrap";

function WorkCard(props) {

    let techList = props.techUsed.map((item) => 
        <li className='techList'>{item}</li>
    );

    let descList = props.description.map((item) => 
      <li className='descList'>{item}</li>
    );
    
    return(
    <Card
    bg={"light"}
    key={"light"}
    text={'dark'}
    className="mb-2"
  >
    <Card.Header className='headerPlace'>{props.company}</Card.Header>
    <Card.Body>
      <Card.Title className='titlePlace'>{props.title} </Card.Title>
      <Card.Text className='techPlace'>
          <b>Technology Used:</b>
              {techList}
      </Card.Text>
      <Card.Text className='descriptionPlace'>
        {descList}
      </Card.Text>
      <Card.Text className='durationPlace'>
         <b>Duration:</b> {props.dateRange}
      </Card.Text>
    </Card.Body>
  </Card>
        
    );
}


export default WorkCard;