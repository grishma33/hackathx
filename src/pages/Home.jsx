import { Container, Col, Row , Carousel,Card} from "react-bootstrap";
import one from "../assets/images/homeimage.png";
import two from "../assets/images/cardimage1.png";
import "./Home.css";
import Footer from "../components/footer/Footer";


const Home = () => {
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
      {/*       <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Connect with Developers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item> */}
              </Carousel>
            </Col>
        </Row>
      </Container>

      <Container>
        <Row>
            <Col>

              <h3> Past Hackathons</h3>
              <Card style={{ width: '24rem', height: '24rem' }}>
                  <Card.Img variant="top" src={two} />
              <Card.Body>
                  <Card.Title>HackFest2023</Card.Title>
                  <Card.Text className="slider">
                      HackFest is a coding hackathon which is organized by ABC Pvt. Ltd. every year.This hackathonis a lot famous among developers.
                  </Card.Text>
          
              </Card.Body>
              </Card>
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

export default Home;
