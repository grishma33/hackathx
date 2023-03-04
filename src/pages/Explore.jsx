import { Container, Col, Row , Carousel,Card,Image,Button} from "react-bootstrap";
import Footer from "../components/footer/Footer";
import one from "../assets/images/homeimage.png";
import two from "../assets/images/homeimage2.png";
import three from "../assets/images/cardimage2.png";
import four from "../assets/images/cardimage3.png";
import imagec from "../assets/images/C++.svg";
import imageds from "../assets/images/DS.svg";
import imagejs from "../assets/images/JS.svg";
import imagepy from "../assets/images/Python.svg";
import imageai from "../assets/images/AI.svg";
import imageang from "../assets/images/Angular.svg";
import "./Explore.css";


const Explore = () =>{
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={one}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h2>Connect with Developers</h2>
                                <p>Get a chance to connect with other Developers.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={two}
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h2>A built-in Code Editor!</h2>
                                <p>Improve Your Coding Skills.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>


            <Container>
                <Row>
                    <Col>

                        <h3> Upcoming Hackathons</h3>
                        <Card style={{ width: '24rem', height: '24rem' }}>
                            <Card.Img variant="top" src={three} />
                        <Card.Body>
                            <Card.Title>Hackathx - A Coding journy Open</Card.Title>
                            <Card.Text className="slider">
                                Hackathx is a coding hackthon which is organized by CodeDev Pvt. Ltd. every year.This hackthon is a lot famous among developers who are working in the advance and complex technologies.
                            </Card.Text>
                    
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
      
      <br/>
      <br/>
            <Container fluid className="explore-body">
                <Row>
                    <Col className="column">

                        <h3 className="title"> Practice Coding!</h3>
                        <br/>
                        <Card className = "Card" style={{ width: '30rem', height: '28rem' }}>
                            <Card.Img className = " image"variant="top" src={four} />
                        <Card.Body>
                            <Card.Title>Why Coding Is important ?</Card.Title>
                            <Card.Text className="slider">
                            Coding refers to the intercommunication process for us to give instructions for a computer or program to process our requests. It is widely used in our daily life, from gadgets such as smartphones, tablets, smart TV and other smart home appliances, to automated cars and facilities like traffic lights, etc., it has been part of our lives.
                            </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col>
                        <Image className="cimage"
                        src= {imagec}
                        />
                        <Image className="dsimage"
                        src= {imageds}
                        />

                    </Col>
                    <Col>
                    <Image className="cimage"
                        src= {imagejs}
                        />
                        <Image className="dsimage"
                        src= {imagepy}
                        />

                    </Col>
                </Row>
        
            </Container>

             <br/>

            <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className = "imagepython" variant="top" src={imagepy} />
                        <Card.Body>
                            <Card.Title>Python</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                            {/* https://www.python.org/ */}
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className = "imageDatas" variant="top" src={imageds} />
                        <Card.Body>
                            <Card.Title>Data Structure</Card.Title>
                            {/* https://www.geeksforgeeks.org/data-structures/ */}
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>

                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className = "imageclan" variant="top" src={imagec} />
                        <Card.Body>
                            <Card.Title>C++</Card.Title>
                            {/* https://www.w3schools.com/cpp/ */}
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className = "imagejava" variant="top" src={imagejs} />
                        <Card.Body>
                            <Card.Title>Java Script</Card.Title>
                            {/* https://javascript.info/ */}
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className = "imageai" variant="top" src={imageai} />
                        <Card.Body>
                            <Card.Title>Artificial Intelligence</Card.Title>
                            {/* https://ai.google/ */}
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className = "imageang" variant="top" src={imageang} />
                        <Card.Body>
                            <Card.Title>Angular</Card.Title>
                            {/* https://angular.io/ */}
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Footer/>
                </Row>
            </Container>
        </>
    )
}

export default Explore;