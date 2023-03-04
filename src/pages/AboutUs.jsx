//import React from 'react'

import { Container, Col, Row , Card, Button} from "react-bootstrap";
// import one from "../assets/images/homeimage.png";
import two from "../assets/images/cardimage1.png";
import "./Home.css";
import Footer from "../components/footer/Footer";


const AboutUs = () => {
  return (
    <>
      <Container>
        <Row>
            <Col>
              <br></br>
            <Card style={{ width: '10rem', height: '10rem' }}>
                  <Card.Img variant="top" src={two} />
              </Card>

              <h3> INTRODUCTION</h3>
              
              <p>EduHack provides an end-to-end hackathon platform for organizations and student developers. It consists of all features which are
                needed while organizing and managing a hackahton. It comes with excellent designs and technical support. This platform helps student developers to get started with coding and grow their skills . Organizations like
                college, universities can also use this platform to arrange internal hackathons and manage them well.</p>

                <h3>BENEFITS OF ORGANIZING WITH EDUHACK</h3>

                <p>(1) Easy to Use and Manage Hackathons.</p>
                <p>(2) Arrange Hackathons on the go.</p>
                <p>(3) Less burden of handling records.</p>
                <p>(4) Manage sponsors & prizes.</p>


                <h3>PROCESS FOR CREATING AND MANAGING A HACKATHON</h3>

                <p>(1) Create an organization account.</p>
                <p>(2) Go through Overview of platform.</p>
                <p>(3) Add hackathon details & Problem Statements.</p>
                <p>(4) Add Sponsors & Prizes.</p>
                <p>(5) Publish a Hackathon.</p>
                <p>(6) Handle Submissions.</p>
                <p>(7) Announce Winners.</p>

                <h3> TERMS & CONDITIONS</h3>
                <p>The data provided by organizers is correct and they're take assurity for the same.</p>
                <p>Hackathon sponsors and prizes are displayed as it is without any modification from our side</p>
                <p>organizers are responsible for announcing and distributing prizes among participants</p>
                <p>We respect data privacy and hence we do not share data with any third parties for any purpose.
                </p>
                <div className="mb-2">
                <Button variant="primary" size="lg">
                      Organize Hackathon
                </Button>
                
      </div>

           
            </Col>
          </Row>
          <br/>
          <br/>

      </Container>

      <Container fluid>
          <Row>
              <Footer/>
          </Row>
      </Container>
     

  
    </>
  );
}

export default AboutUs;


