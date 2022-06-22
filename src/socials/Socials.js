import React from 'react';
import {Card, Col, Row, Button} from 'react-bootstrap';
import githubImage from "../GitHub_Logo.png";
import linkedInImage from "../LI-Logo.png";
import gmailImage from "../Gmail_Logo_512px.png";

import "./Socials.css"; 

function Socials(){

    return(
        <div id="socialsTile" className="websiteBackground">
        <h1 className="socialsTitle">Socials</h1>
       <Row xs={1} md={3} className="g-2">
            <Col>
                <Card>
                <Card.Img className='imageWidth' variant="top" src={githubImage} alt='Github Logo'/>
                <Card.Body>
                    <Card.Title>My GitHub!</Card.Title>
                    <Card.Text>
                    Visit my GitHub to find out projects and technology that interest me!
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button href='https://github.com/Maxmets' variant="info" size="lg">
                            Click Me
                        </Button>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img className='imageWidth' variant="top" src={linkedInImage} alt='LinkedIn Logo'/>
                <Card.Body>
                    <Card.Title>My LinkedIn!</Card.Title>
                    <Card.Text>
                    Visit my LinkedIn to learn more about me and my experiences! 
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button href='https://www.linkedin.com/in/maksymyakhymets/' variant="info" size="lg">
                            Click Me
                        </Button>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img className='imageWidth' variant="top" src={gmailImage} alt='Gmail Logo'/>
                <Card.Body>
                    <Card.Title>Email!</Card.Title>
                    <Card.Text>
                    Direct get in touch with me through email! 
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button href='mailto:maxmets27@gmail.com' variant="info" size="lg">
                            Click Me
                        </Button>
                    </div>
                </Card.Body>
                </Card>
            </Col>
        </Row>
       
        </div>
    );
}


export default Socials;