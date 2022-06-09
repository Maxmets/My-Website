import React from 'react';
import {Card, Col, Row, Button} from 'react-bootstrap';

import "./Socials.css"; 

function Socials(){

    return(
        <div id="socialsTile" className="websiteBackground">
        <h1 className="socialsTitle">Socials</h1>
        {/* <img className="image1" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="270"/>
        <img className="image2" src="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png" width="270"/> */}
       <Row xs={1} md={3} className="g-2">
            <Col>
                <Card>
                <Card.Img variant="top" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" />
                <Card.Body>
                    <Card.Title>My GitHub!</Card.Title>
                    <Card.Text>
                    Visit my GitHub to find out projects and technology that interest me!
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="success" size="lg">
                            Click Me
                        </Button>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img variant="top" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" height="150"/>
                <Card.Body>
                    <Card.Title>My GitHub!</Card.Title>
                    <Card.Text>
                    Visit my GitHub to find out projects and technology that interest me!
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="success" size="lg">
                            Click Me
                        </Button>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img variant="top" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" height="150"/>
                <Card.Body>
                    <Card.Title>My GitHub!</Card.Title>
                    <Card.Text>
                    Visit my GitHub to find out projects and technology that interest me!
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="success" size="lg">
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